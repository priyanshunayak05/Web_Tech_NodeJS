import { useState } from "react";

function Mongambo({naam}) {   
    // let myname=naam;
    let [name,setNaam]=useState(naam);
    function handleNaam(){
        
        console.log(name,"before change");
        setNaam("Priyanshu Nayak"); // ye react ka function hai jo state ko change karta hai jo pure function ko re render kar deta hai and this is a asynchronous function
    //    
        console.log(name,"after change");
        
    }
    return(
        <div>
            <button onClick={handleNaam} >Naam :{name}</button>
            </div>
    );
}
export default Mongambo;