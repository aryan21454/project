
import { useState , useEffect } from 'react';
import './App.css';
import  Axios  from 'axios';
import { BrowserRouter  as Router , Routes , Route,Link} from 'react-router-dom';


function App() {
    const [mylist , setmylist] = useState([])
    const [work , setwork] = useState("")
    const setlist = () => {
        setmylist([...mylist,work])
    }
    return (<div>
        To Do list    
        <input type= 'text' onChange={(event)=>{setwork(event.target.value)}}/>
        <br/>
        <button onClick={setlist}> Submit </button>
        <ul>
      {mylist.map((item) => (
        <li >{item}</li>
      ))}
    </ul>
    </div>);
}
export default App;
