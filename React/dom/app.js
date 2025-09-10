// // let rootEl=document.getElementById('root');

// // let h1=React.createElement('h1',null,'Hello World React');
// let h1=React.createElement('h1',{id:"Nayak",className:"priyanshu"},'Hello World React');
// let root=ReactDOM.createRoot(rootEl);
// root.render(h1)


// --------------------------------------------------------------
// let rootEl=document.getElementById('root');
// let h1=React.createElement('div',null,
//     React.createElement('div',null,
//         React.createElement('h1',null,'Hello World React')));
// let root=ReactDOM.createRoot(rootEl);
// root.render(h1)



// --------------------------------------------------------------
let rootEl=document.getElementById('root');
let h1=<div>

    <div>
        <h1>Hello World React</h1>
    </div>  
    <h2>This is h2 tag</h2>
    <div>
        <h3> h3 tag</h3>
    </div>
</div>;
let root=ReactDOM.createRoot(rootEl);
root.render(h1)