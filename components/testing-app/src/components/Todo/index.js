import {useState} from 'react'


const defaultItems = [
    {
        name: 'Item A',
    },
    {
        name: 'Item B',
    },
    {
        name: 'Item C',
    }
]

function Todo() {
    const [text,setText] = useState('');
    const [items, setItems] = useState(defaultItems);

    const addItem = () => {
        setItems((prevState) => [...prevState, { name: text }]);
        setText('');
    }

  return (
    <div>
      <h2>Todo</h2>
      <label>
        Text
        <input type="text" name="input" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <button onClick={addItem}>Add</button>
      
      <br />
      <br />
      <h2>My List</h2>
      {
        items.map((item, key) => (
            <div key={key}>{item.name}</div>
        ))
      }
    </div>
  )
}

export default Todo
