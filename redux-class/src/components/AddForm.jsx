import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/TodoSlice";

export default function AddForm(){
    let [task, setTask] = useState("");
    let dispatch = useDispatch();

    let submitHandler = (event) => {
        event.preventDefault();
        dispatch(addTodo(task))
        console.log(task)
        setTask("")
    }
    return(
        <>
         <form action="" onSubmit={submitHandler}>

            <input type="text" placeholder="Enter task" value={ task } onChange={(event) => setTask(event.target.value)}  required /> <br /> <br />
            <button>Add Task</button> 
         </form>
        </>
    )
}