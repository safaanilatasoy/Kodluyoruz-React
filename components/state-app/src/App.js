import './App.css';
import {useState} from "react";



function App() {
const [name, setName] = useState('Anil');
const [age, setAge] = useState(25);

// Array States
const [friends, setFriends] = useState(["Ahmet","Ali", "Murat"]);

// Object States
const [address,setAddress] = useState({title: "Istanbul", zip: 34532});

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

      <button onClick={() => setFriends([...friends, "Ayşe"])}>
        Add new friend
      </button>

      <hr />
      <br />

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>

      <br />

      <button
        onClick={() => setAddress({title: "Ankara", zip: 44444 })}
      >
        Add new address
      </button>
    </div>
  );
}

export default App;
