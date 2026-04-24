import React, { useState, useEffect } from 'react';
import { Search, Plus, Minus, Trash2 } from 'lucide-react';
import './Pharmacy.css';

// Replace this with your Render URL after deployment
const API_URL = "http://localhost:5000/api/inventory";

export default function Pharmacy() {
  const [stock, setStock] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newName, setNewName] = useState("");
  const [newQty, setNewQty] = useState("");
  const [newPrice, setNewPrice] = useState("");

  // --- 1. GET ALL MEDICINES (Read) ---
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setStock(data))
      .catch(err => console.error("Error loading inventory:", err));
  }, []);

  // --- 2. ADD NEW MEDICINE (Create) ---
  const handleAddNewMedicine = async (e) => {
    e.preventDefault();
    if (!newName || !newQty || !newPrice) return;

    const newEntry = {
      name: newName,
      quantity: parseInt(newQty),
      price: parseFloat(newPrice)
    };
    const initialMedicines = [
  { name: "Amoxicillin 500mg", qty: 150, price: 12.50 },
  { name: "Lisinopril 10mg", qty: 200, price: 8.99 },
  { name: "Metformin 500mg", qty: 300, price: 15.75 }
];

    try {
      const response = await fetch(`${API_URL}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      });
      const savedItem = await response.json();
      setStock([savedItem, ...stock]); // Update UI
      
      setNewName(""); setNewQty(""); setNewPrice(""); // Clear inputs
    } catch (err) {
      alert("Failed to save to database");
    }
  };

  // --- 3. UPDATE QUANTITY (Update) ---
  const updateQuantity = async (id, change) => {
    const item = stock.find(i => i._id === id); // MongoDB uses _id
    const newQuantity = Math.max(0, item.quantity + change);

    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity })
      });
      
      setStock(prev => prev.map(item => 
        item._id === id ? { ...item, quantity: newQuantity } : item
      ));
    } catch (err) {
      console.error("Update failed");
    }
  };

  // --- 4. REMOVE MEDICINE (Delete) ---
  const removeMedicine = async (id) => {
    if(window.confirm("Delete this medicine permanently?")) {
      try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        setStock(stock.filter(item => item._id !== id));
      } catch (err) {
        alert("Could not delete");
      }
    }
  };

  const filteredStock = stock.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pharmacy-container">
      <div className="pharmacy-header">
        <h1>Pharmacy Inventory</h1>
        <p>Database Connected System</p>
      </div>

      <div className="add-item-card">
        <h3>Add New Medicine to Stock</h3>
        <form className="add-item-form" onSubmit={handleAddNewMedicine}>
          <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} required />
          <input type="number" placeholder="Qty" value={newQty} onChange={(e) => setNewQty(e.target.value)} required />
          <input type="number" step="0.01" placeholder="Price ($)" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} required />
          <button type="submit" className="add-submit-btn"><Plus size={18} /> Register</button>
        </form>
      </div>

      <div className="inventory-tools">
        <div className="search-box">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Filter list..." onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>

      <div className="table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Stock Level</th>
              <th>Unit Price</th>
              <th className="text-right">Manage</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.map(item => (
              <tr key={item._id} className={item.quantity < 10 ? 'low-stock-row' : ''}>
                <td className="med-name">
                  {item.name} {item.quantity < 10 && <span className="low-label">LOW</span>}
                </td>
                <td><b>{item.quantity}</b> units</td>
                <td>${parseFloat(item.price).toFixed(2)}</td>
                <td className="action-btns">
                  <button onClick={() => updateQuantity(item._id, -1)} className="btn-minus"><Minus size={14}/></button>
                  <button onClick={() => updateQuantity(item._id, 1)} className="btn-plus"><Plus size={14}/></button>
                  <button onClick={() => removeMedicine(item._id)} className="btn-delete"><Trash2 size={14}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}