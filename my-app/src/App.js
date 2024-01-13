import React, { useState } from 'react'
import './App.css';
import TodoList from './TodoList';

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([])

  const itemsEvent = (event) => {
    setInputList(event.target.value)
  }
  const listOfItems = () => {
    setItems((olditem) => {
      return [...olditem, inputList]
    })
    setInputList("")
  }
  const deleteItems = (id) => {
    console.log('cdbdcefgvcdsvrgfbvjdfhviu')
    setItems((olditem) => {
      return olditem.filter((arrElem, index)=>{
        return index !== id
      })
    })
  }
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <br />
        <h1 className='h1'>Todo List</h1>
        <br />
        <input type='text' placeholder='Add a Items' value={inputList} onChange={itemsEvent} />
        <button onClick={listOfItems} className='button-add'> + </button>
        <ol>

          {Items.map((itemval, index) => {
            return <TodoList key={index} id={index} onselet={deleteItems} text={itemval} />
          })}
        </ol>
      </div>
    </div>

  );
}

export default App;
