import './App.css';
import React, { useState } from 'react';
import ToDOList from './ToDoList';

function App() {

  const [listIteam,setListIteam]=useState(" ");

  const [Items,setIteam] = useState([]);

    const myListIteam=(event)=>{ 
      setListIteam(event.target.value);
    }

    const addListIteam =()=>{
        setIteam((oldItems)=>{
          return [...oldItems,listIteam]
        });
        setListIteam('');
    }

    const dltIteam =(id)=>{
      setIteam((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
            return index!==id;
        })
      })
   };
    
  return (
   <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1> My Todo List</h1>
          <br/>
          <input type='text' name='add iteams' placeholder='Add items here' onChange={myListIteam} value={listIteam}/>
          <button onClick={addListIteam}>+</button>

          <ol>
           { Items.map( (iteamVal,index) => {
             return <ToDOList key={index} id={index} text ={iteamVal} onSelect={dltIteam} />
            })}
          </ol>
        </div>
      </div>
   </>
  );
}

export default App;
