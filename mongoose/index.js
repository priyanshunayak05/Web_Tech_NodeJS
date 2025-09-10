const express=require('express');
const app=express();


const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://priyanshunayak123:Priyanshu@cluster0.6ozpufz.mongodb.net/')
.then(()=>{
    console.log("MONGO CONNECTION OPEN!!!");
})
.catch(err=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
})




app.get('/',(req,res)=>{
    res.send("welcome to root route");
})

const port=8080;
app.listen(port,()=>{
    console.log(`server connected at port : ${port}`);
})