import {useState, useMemo} from "react";
import Header from "./components/Header"


function App() {
const [number, setNumber] = useState(0);
const [text, setText] = useState("");

const data = useMemo(() => {
  return calculateObject();
}, [number]);

// const data = calculateObject();



  return (
    <>
      <Header data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>Click</button>

      <br /><br />
      <input value={text}  onChange={({target}) => setText(target.value)}/>

    </>
  )
}


function calculateObject() {
  console.log("Calculating...");
  for(let i=0; i<100; i++){
      console.log("Calculating Completed!");
  }
   return { name: "Anıl" };
}

export default App
