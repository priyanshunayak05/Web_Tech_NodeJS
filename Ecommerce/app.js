const express = require('express');
const app = express();
const path= require('path');
const seedDb= require('./seed');
const productRoutes=require('./routes/product');
const methodOveride= require('method-override');
const ejsMate=require('ejs-mate');



// override with POST having ?_method=DELETE
app.use(methodOveride('_method'));

// database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Shopping-app')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));



app.engine('ejs', ejsMate); // for using ejs-mate 
app.set('view engine', 'ejs'); // if using EJS what view engine is viewing ejs file are using
app.set('views', path.join(__dirname, 'views')); // correct path to views
// public folder 
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(express.urlencoded({ extended: true })); // to parse the body of the request


// seed the database
// seedDb();
app.use(productRoutes);






app.listen(8080, () => {
  console.log('Server is running on port 3000');
});