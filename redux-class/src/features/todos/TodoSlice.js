import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id:123,
            task:"read",
            isDone:false
        }
    ],
}

export const todosSlice = createSlice({
    name:'todos', 

    initialState,

    reducers: {
        addTodo: (state, action) => {
           
            const newTodo = {
                id:nanoid(),
                task: action.payload,
                isDone: false
            };

            state.todos.push(newTodo);
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        },

        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload){
                    return { ...todo, isDone: true };
                }

                return todo;
            })
        }

        
    }
})

export default todosSlice.reducer;
export const{addTodo, deleteTodo, markAsDone} = todosSlice.actions;