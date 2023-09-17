import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

function App() {

  //Keep track of every new Todo item
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  //To copy the Todos array and add the todo item to it, Array spread operator used
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo(" ");
    }
  };

  //Delete the task or remove it
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  }



  return (
    <>
      <div className='App'>
        <h1 id='title'>React Todo App</h1>
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList list={todos} remove={deleteTodo} />
      </div>
    </>
  )

}
export default App;
