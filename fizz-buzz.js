// console.log(process.argv);
// let count =process.argv.pop();
// let a="";
// for(let i=0; i<count;i++)
//     {
//         a +=process.argv[2];
//     }

// console.log(" "+a);


// let neww =process.argv.slice(2);
// console.log();


// let num=19;
// for(let i=1;i<num;i++){
//     if(i%3 ==0){
//         console.log("fizz");
        
//     }
//     else if(i%5 == 0){
//         console.log("Buzz");
        
//     }
//     else{
//         console.log(i);
        
//     }
// }



let num =19;
let c1=1;
let c2=1;

for(let i=1;i<=num;i++){
    let str="";
    if(c1===3)
        {
        str+="fizz";
        c1=0;
     }

    if (c2===5){
        str +="fuzz";
        c2=0;
    }
    if(str ===""){
        str +=i;
    }
    c1++;
    c2++;
    console.log(str);
    
}
