import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';


function App() {
  const onDelete = (todo) => {
    console.log("Delete is clicked todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Complete React Course',
      desc: 'Complete the React course and learn ReactJS',
    },
    {
      sno: 2,
      title: 'Mern Stack Project',
      desc: 'Complete the Mern Stack project and learn Mern Stack',
    },
    {
      sno: 3,
      title: 'Read a Book',
      desc: 'Read a book on React and Mern Stack',
    },
  ]);
  return (
    <>
      <Header title="MyTodoList" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
