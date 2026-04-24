const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
console.log("My Mongo Link is:", process.env.MONGO_URI);

const app = express();

// MIDDLEWARE (Crucial: allows frontend to talk to backend)
app.use(cors()); 
app.use(express.json()); 

// 2. THE DATA MODEL (The structure of your medicine)
const Medicine = mongoose.model('Medicine', new mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number
}));

// 3. THE "REGISTER" ROUTE (This fixes your error!)
app.post('/api/inventory/add', async (req, res) => {
    try {
        const newMedicine = new Medicine(req.body);
        await newMedicine.save();
        res.status(201).json(newMedicine); // Sends success back to React
    } catch (err) {
        res.status(400).json({ message: "Database Error" });
    }
});

// 4. THE "GET" ROUTE (To show the list on refresh)
app.get('/api/inventory', async (req, res) => {
    const medicines = await Medicine.find();
    res.json(medicines);
});

// Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
    .catch(err => console.error("MongoDB Connection Failed:", err));