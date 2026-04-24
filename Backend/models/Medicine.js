const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    manufacturer: String,
    price: { type: Number, required: true },
    stockQuantity: { type: Number, default: 0 },
    expiryDate: Date,
    category: String, // e.g., Antibiotics, Painkillers
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Medicine', MedicineSchema);