const express= require('express');
const app= express();
const path= require('path');

const mongoose = require('mongoose');
const netaRoutes = require('./routes/neta.route');
mongoose.connect('mongodb://127.0.0.1:27017/neta') 
//promises
.then(()=>{
    console.log("MONGO CONNECTION OPEN!!!");
}   )
.catch(err=>{   
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())  //json
app.use(express.urlencoded({extended:true})); //form data


netaRoutes(app);

const PORT=8080;
app.listen(PORT,()=>{
    console.log(`server connected at port : ${PORT}`);
});


