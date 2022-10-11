import React, { useState } from "react";
import './App.css';
import Todo from './components/Todo';

function App() {
  // this is the logic for setting up state
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);//we want our todos to be sent to an empty array, or at least empty upon new session.

// this is the logic for submitting a new item in our todo list

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    
    if (newTodo.length === 0){// this statement lets us say if the length of the input is 0 characters, then return nothing
      return;
    }

    //this allows us to automatically give our todos a value of not being completed so that we can change that.
    const todoItem = {
      text: newTodo, // we are saying that our todoItem is going to be make up of our newTodo text (what we just submitted)
      complete: false // this is the part that makes it defaulted to not being complete
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  }

// one thing you may be asking is 'how can i make an if/else statement in here? How can I run logic?' the answer is these constants
// when you make and event loop in the html like an onChange event, you need to give it specific directions on what to do.
// this means YOU MUST LEARN TO USE THE COMPUTER LOGIC!

  const handleTodoDelete = (delIdx) =>{// this will help us with our delete button, making it actually work.
    const filteredTodos = todos.filter((todo, i) =>{ // right now 'todo' is our array of things in our todo list.

        return i !== delIdx;// this allows us to say ' if true, keep item. if false/else, remove item.'
    });
    setTodos(filteredTodos);
  }
  
  // so what we want to do is change one of the items in our list, we dont want to use filter cuz we dont want to remove anything.
  // instead we'll use map
  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i){// what were saying is if the id is equal to the other id, then do the following
        todo.complete = !todo.complete; // doing this is changing the todo in the array to not complete

        // To avoid mutating todo directly, do this
        // const updatedTodos= {...todo, complete: !todo.complete };
        // return updatedTodos
        //need to ask how to complete this. as it is the app wont work 
    }
      
      return todo;

    })
    setTodos(updatedTodos)
  }

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(event)=> {
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }} 
        type='text'
        value={newTodo} // adding this value lets us clear out our input box.
        />
        <div>
        <button>Add</button>
        </div>
      </ form>
      

      {// so it looks like we're going to be mapping each of the todos listed in state and returning them like this

        todos.map((todo, i) => { // our todo is no longer a string, instead it is an object


          return (
            // here we need to go in and add props to all of the refactored code in the components file, as 
            // well as define them over here in the app file.
            <Todo key={i} todo={todo} 
            handleToggleComplete={handleToggleComplete}
            i={i}
            handleTodoDelete={handleTodoDelete}/>
          )
        })
      }
    </div>
  );
}

export default App;
