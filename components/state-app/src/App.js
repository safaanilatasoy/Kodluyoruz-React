import './App.css';
import {useState} from "react";



function App() {
const [name, setName] = useState('Anil');
const [age, setAge] = useState(25);
const [friends, setFriends] = useState(["Ahmet","Ali", "Murat"]);

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(18)}>Change Age</button>

      <hr />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key="index">{friend}</div>
      ))}

      <button onClick={() => setFriends([...friends,"Ayşe"])}>Add new friend</button>
    </div>
  );
}

export default App;
