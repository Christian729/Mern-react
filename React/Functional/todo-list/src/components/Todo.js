const Todo = (props) => {
    const todoClasses = ["bold"];
        if (props.todo.complete){
            todoClasses.push("line-through");// if todo is complete, then line-through
        }

    return(
    <div>
    <span className={todoClasses.join(" ")}>{/* here it looks like the do do is separating itself from the others and giving itself a key*/}
      {props.todo.text}{/*  since it is now an object we will add a .text to it  */}
    </span>
    <input checked={props.complete} type="checkbox" onChange={(event) => {
        props.handleToggleComplete(props.i);
    }}></input>
    <button className="btn btn-danger" onClick={(event) => {
        props.handleTodoDelete(props.i);
    }}>Delete</button>
    </div>
);
};

export default Todo;