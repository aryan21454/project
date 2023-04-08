
import { useState , useEffect } from 'react';
import './App.css';
import  Axios  from 'axios';
import { BrowserRouter  as Router , Routes , Route,Link} from 'react-router-dom';


function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = { text: text, id: Date.now() };
    setItems([...items, newItem]);
    setText('');
  }

  function handleDelete(id) {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  const itemList = items.map(item => (
    <div key={item.id}>
      <span>{item.text}</span>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  ));

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add Item</button>
      </form>
      {itemList}
    </div>
  );
}
export default App;
