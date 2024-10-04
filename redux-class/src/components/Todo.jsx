import { useSelector } from "react-redux";
import AddForm from './AddForm';
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todos/TodoSlice";
export default function Todo(){

    let dispatch = useDispatch();

    let todos = useSelector((state) => state.todos);
    console.log(todos);

    let deleteHandler = (id) => {
       
        dispatch(deleteTodo(id))
        console.log()
    }

    let handlingDone = (id) => {
        dispatch(markAsDone(id))
        console.log(id)
    }

    let style = {
        textDecorationLine: "line-through",
    }



    return(
        <>
          <div className="Todo">
                <h2>Todo List</h2>
                <AddForm/>
                <ul>
                    {
                        todos.map((todo) => <li key= {todo.id} > <span style = {todo.isDone ? style : {}}>{todo.task}</span> &nbsp;
                            <button onClick={() => deleteHandler(todo.id)}>Delete</button> &nbsp;
                            <button onClick={() => handlingDone(todo.id)}>Done</button></li> 
                        )
                    }
                </ul>
          </div>
        </>
    )
}