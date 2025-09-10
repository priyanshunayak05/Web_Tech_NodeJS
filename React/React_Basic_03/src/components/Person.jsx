

function Person(props){
    // console.log(props);
    
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Age:{props.age}</h2>
            <h2>City: {props.city}</h2>
        </div>
    )
}

export default Person;