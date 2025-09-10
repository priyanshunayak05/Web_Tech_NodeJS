// export function Sam(){
//     return(
//         <div>
//             <h1>Welcome to React </h1>
//             <Sam />

//         </div>
//     )
// }
// // export default Sam;




export function Sam(){
    let a=10;
    let b="Sam";
    let f =undefined;
    let e =null;

    function budbak(){
        console.log("I am budbak function");
    }
    function ANKIT(){
        console.log("I am ANKIT function");
    }


    // neeche walo duniya
    return(
        <div>
       <div>
             <h1> This is Sam Component</h1>     
            <h2> Value of a is : {a} </h2>
            <h2> Value of b is : {b} </h2>
            <h2> Value of f is : {f} </h2>
            <h2> Value of e is : {e} </h2>  
            <h2> Sum of a + 5 is : {a+5} </h2>
            <h2>F: { JSON.stringify(f) }</h2>
       </div>
       <button onClick={budbak}>Click Me</button>
       {/* agrument bhej ni skte  */}
       <button onClick={()=>ANKIT()}>Click Me 2</button> 
       {/* call back function   and argument bhej skte */}
            </div>
    )
}
export default Sam;