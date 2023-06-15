import { useState } from 'react'
import Navbar from './components/navbar'
import Todo from './components/todo'
import './App.css'
import Button from './components/button'
import Form from './components/form'
import TodoLists from './components/todoList/todoLists'

function App() {
  

  return (
    <>
    <Navbar />
    <Form />
     <div className='lists__container'>
      <TodoLists timing={"daily"} />
      <TodoLists timing={"weekly"} />
      <TodoLists timing={"monthly"} />
    </div>
    </>
  )
}

export default App
