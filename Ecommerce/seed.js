const mongoose = require('mongoose');
const Product = require('./models/Product'); //for schema

const Products = [
  {
    name: 'Laptop', 
    price: 44000.99,
    description: 'A high-performance laptop for all your computing needs.',
    imageUrl: 'https://images.unsplash.com/photo-1742321636709-499fc799c562?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcCUyMGltYWdlJTIwZm9lJTIwZWNwcG1lcm5jZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
    name: 'Smartphone',
    price: 15000.99,
    description: 'A sleek smartphone with the latest features.',
    imageUrl: 'https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob25lJTIwc2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D'
    },{
    name: 'Headphones',
    price: 2999.99,
    description: 'Noise-cancelling headphones for immersive sound experience.',
    imageUrl: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D'
    },
  {
    name: 'Smartwatch',
    price: 7999.99,
    description: 'A stylish smartwatch to keep you connected on the go.',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'
  }
]

// return a promise
async function seedDb(){
  await Product.insertMany(Products);
  console.log("data seeded successfully");  
  }
  module.exports = seedDb;