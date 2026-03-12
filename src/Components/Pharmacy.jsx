import React, { useState, useEffect } from 'react';
import { Search, Plus, Minus, Trash2, AlertCircle, ShoppingBag } from 'lucide-react';
import './Pharmacy.css';

export default function Pharmacy() {
  const [stock, setStock] = useState(() => {
    const saved = localStorage.getItem('clinic_inventory');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  
  // State for the "New Medicine" inputs
  const [newName, setNewName] = useState("");
  const [newQty, setNewQty] = useState("");
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    localStorage.setItem('clinic_inventory', JSON.stringify(stock));
  }, [stock]);

  // --- NEW FUNCTION: ADD NEW MEDICINE ---
  const handleAddNewMedicine = (e) => {
    e.preventDefault();
    if (!newName || !newQty || !newPrice) return;

    const newEntry = {
      id: Date.now(),
      name: newName,
      quantity: parseInt(newQty),
      price: parseFloat(newPrice)
    };

    setStock([newEntry, ...stock]); // Add new item to the top of the list
    
    // Clear the input fields
    setNewName("");
    setNewQty("");
    setNewPrice("");
  };

  const updateQuantity = (id, change) => {
    setStock(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ));
  };

  const removeMedicine = (id) => {
    if(window.confirm("Delete this medicine?")) {
      setStock(stock.filter(item => item.id !== id));
    }
  };

  const filteredStock = stock.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pharmacy-container">
      <div className="pharmacy-header">
        <h1>Pharmacy Inventory</h1>
        <p>Control Center for Stock & Pricing</p>
      </div>

      {/* --- ADD NEW MEDICINE SECTION --- */}
      <div className="add-item-card">
        <h3>Add New Medicine to Stock</h3>
        <form className="add-item-form" onSubmit={handleAddNewMedicine}>
          <input 
            type="text" 
            placeholder="Medicine Name (e.g. Paracetamol)" 
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
          <input 
            type="number" 
            placeholder="Initial Qty" 
            value={newQty}
            onChange={(e) => setNewQty(e.target.value)}
            required
          />
          <input 
            type="number" 
            step="0.01" 
            placeholder="Price ($)X" 
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            required
          />
          <button type="submit" className="add-submit-btn">
            <Plus size={18} /> Register Medicine
          </button>
        </form>
      </div>

      <div className="inventory-tools">
        <div className="search-box">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Filter list..." 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
              <tr key={item.id} className={item.quantity < 10 ? 'low-stock-row' : ''}>
                <td className="med-name">
                   {item.name}
                   {item.quantity < 10 && <span className="low-label">LOW</span>}
                </td>
                <td><b>{item.quantity}</b> units</td>
                <td>${item.price.toFixed(2)}</td>
                <td className="action-btns">
                  <button onClick={() => updateQuantity(item.id, -1)} className="btn-minus"><Minus size={14}/></button>
                  <button onClick={() => updateQuantity(item.id, 1)} className="btn-plus"><Plus size={14}/></button>
                  <button onClick={() => removeMedicine(item.id)} className="btn-delete"><Trash2 size={14}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}