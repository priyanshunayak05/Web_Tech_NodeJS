import Counter from "./components/Counter";
import Mongambo from "./components/Mongambo";
import Person from "./components/Person";



function App() {
  return (
    <div>
      <h1>App</h1>
      <h1>Hello React!</h1>
      {/* according to java script they are argument and react it called props */}
      <Person name="Priyanshu Nayak" age={21} city="Bangalore"/>  
      <Person name="John Doe" age={25} city="New York"/>
      <Person name="Jane Smith" age={30} city="Los Angeles"/>
      <Person name="Alice Johnson" age={28} city="Chicago"/>
      <Person name="Bob Brown" age={35} city="Houston"/>
      {/* <Person/> */}
      {/* Monganmbo */}

      <Mongambo naam="Priyanshu"/>
      <Counter/>

      </div>
  
  );
}

export default App;