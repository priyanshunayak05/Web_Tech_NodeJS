const express= require('express');
const router= express.Router();
const Product= require('../models/Product');


// to show all products
router.get('/products', async(req,res)=>{
    let products= await Product.find({});
    res.render('products/index',{products});
});

// to show the form for new product
router.get('/product/new',(req,res)=>{
    res.render('products/new');
});


// to actually add the product
router.post('/products',async(req,res)=>{
    let {name, price, description, imageUrl}= req.body;
    await Product.create({name, price, description, imageUrl});
    res.redirect('/products');
})


// to show a particular product
router.get('/products/:id', async(req,res)=>{
   let {id}=req.params;
   let foundProduct=await Product.findById(id);
   res.render('products/show',{foundProduct});
})


// form to edit the product 

router.get('/products/:id/edit', async(req,res)=>{
    let {id}=req.params;
    let foundProduct=await Product.findById(id);
    res.render('products/edit',{foundProduct});
 } )



//  to update the product
router.patch('/products/:id', async(req,res)=>{
    let {id}=req.params;
    let {name, price, description, imageUrl}= req.body; 
    // destructuring the body of the request
    // mongoose always return a promise
    await Product.findByIdAndUpdate(id,{name, price, description, imageUrl});
    res.redirect(`/products/${id}`);
})


// to delete a product
router.delete('/products/:id', async(req,res)=>{
    let {id}=req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})
module.exports= router;