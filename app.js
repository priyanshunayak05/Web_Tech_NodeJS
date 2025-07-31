console.log(process.argv);
let count =process.argv.pop();
let a="";
for(let i=0; i<count;i++)
    {
        a +=process.argv[2];
    }

console.log(" "+a);

