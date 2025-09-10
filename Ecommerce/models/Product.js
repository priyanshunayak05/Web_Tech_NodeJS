const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: { type: String, required: true ,trim: true},
  price: { type: Number, required: true ,min: 0},    
    description: { type: String ,trim: true},
    imageUrl: {type: String, required: true,default: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D' },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }] 
});

let Product = mongoose.model('Product', productSchema);

module.exports = Product;

