const express = require('express');
// const express = require("express");  
const path = require('path'); // Importing path module
const { title } = require('process');
const app = express(); // instance of your application
import methodOverride from 'method-override';
app.use(methodOverride('_method'));

let blogs=[
    {
        id:1,
        author:"Priyanshu",
        Comments:"This is a comment",
        title:"My first blog",  
    },
  
    {
        id:3,
        author:"Priyanshu Nayak",
        Comments:"This is a comment 3",
        title:"My two blog",
    },   
    {
        id:4, 
        author:"Priyanshu pandit",
        Comments:"This is a comment 4",     
        title:"My third blog",
    }
    ]




app.get('/', (req, res) => {
    res.send("welcome to root route");
})





app.set('view engine', 'ejs'); // setting the view engine to ejs

app.set('views', path.join(__dirname,'views')); // setting the views directory
// GET /style.css etc middleware to serve static files
// Middleware to serve static files from the 'public' directory

app.use(express.static(path.join(__dirname, 'public')))

// Middleware to parse  URL-encoded data
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let password=800;

// it works only on this path /home
app.use('/home',(req, res, next) => {
    if(password !== 800) {
        next();
    }
    else{
        res.send("Access Denied! Wrong Password"); // if password is not 800, send access denied message
    }
})

app.get('/home', (req, res) => {
    res.send("welcome to root route home page");    
})


   

app.listen(8080, () => {
    console.log(`server connected at port 1 : 8080`);
}) // server is listening on port 8080


// create 
app.get('/blogs', (req, res) => {
    res.render('blogs/index',{blogs}); // rendering the blogs.ejs file with blogs data
})

app.post('/blogs', (req, res) => {
    let { author, Comments, title } = req.body; // extracting data from the form
    blogs.push({
        id: blogs.length + 1, // assigning a new id
        author,
        Comments,
        title
    });     
    console.log("blogs created successfully");
    res.redirect('/blogs'); // redirecting to the blogs page after creating a new blog
    
 
})

app.get('/blogs/new', (req, res) => {
    res.render('blogs/new'); // rendering the new blog form
})  



// particular blog
app.get('/blogs/:id', (req, res) => {
    let { id } = req.params; // extracting the id from the URL
    let foundBlog = blogs.find((blog)=>blog.id == id) // finding the blog with the given id
    res.render('blogs/show',{foundBlog}); // sending the found blog as a response
})


// update
app.get('/blogs/:id/edit', (req, res) => {
    let { id } = req.params; // extracting the id from the URL
    let foundBlog = blogs.find((blog)=>blog.id == id) // finding the blog with the given id
    res.render('blogs/edit',{foundBlog}); // sending the found blog as a response
})


//patch


app.patch('/blogs/:id', (req, res) => {
    let { id } = req.params; // extracting the id from the URL
    let foundBlog = blogs.find((blog)=>blog.id == id) // finding the blog with the given id
    let { author, Comments } = req.body; // extracting data from the form
    foundBlog.author = author; // updating the author
    foundBlog.Comments = Comments; // updating the comments
    // foundBlog.title = title; // updating the title
    res.redirect('/blogs'); // redirecting to the blogs page after updating the blog
})


// delete
app.delete('/blogs/:id', (req, res) => {
    let { id } = req.params; // extracting the id from the URL
    let newArray = blogs.filter((blog)=>blog.id != id) // finding the blog with the given id
    // blogs.splice(blogs.indexOf(foundBlog), 1); // removing the blog from the array
    blogs = newArray; // updating the blogs array with the new array
    res.redirect('/blogs'); // redirecting to the blogs page after deleting the blog
})


