// import path from "path"
// by changing path from commonjs to module in package.json
// console.log(process.cwd()) // current dir
// console.log(__dirname)  // give execution path
// console.log(path.join("a","b","c"))

const fs=require("fs")
fs.writeFile("asd.txt","This is a new file named asd.txt",{
    encoding:"utf-8",
    flag:"w"
},(err)=>{
    if(err){
        console.log("Error in writing file", err)
    }else{
        console.log("File written successfully")
    }
})

fs.readFile("asd.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error in reading file", err)
    }else{
        console.log("File read successfully")
        console.log(data)
    }
})

fs.appendFile('asd.txt',' main nhi btara', (err)=>{
    if(err){throw err}
    console.log("data edited successfully");
    
})

// delete
fs.unlink('asd.txt',(err)=>{
    if(err){throw err}
    console.log("file deleted successfully");
    
})


// Requiring a file

