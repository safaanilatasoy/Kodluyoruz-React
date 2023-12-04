import './App.css';
import {useState} from "react";



function App() {
const [name, setName] = useState('Anil');
const [age, setAge] = useState(25);

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(18)}>Change Age</button>
    </div>
  );
}

export default App;
