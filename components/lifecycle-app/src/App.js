import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Anil");

  useEffect(() => {
    console.log("State updated...");
  },[]);

  useEffect(() => {
    console.log("number state güncellendi");
  },[number]);

  useEffect(() => {
    console.log("name state güncellendi");
  },[name]);


  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />
      <h1>{name}</h1>
      <button onClick={() => setName("Mehmet")}>Click</button>
    </div>
  );
}

export default App;
