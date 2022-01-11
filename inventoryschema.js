const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Schema to store inventory item
const inventorySchema = new Schema({
    itemname: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    location: { type: String, required: true },
});
const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;
