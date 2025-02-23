import {creatSlice, nanoid} from '@redux/toolkit';

const initialState = {
  todos: [{id: 1, text: "Hellp World"}]
}

export const todoSlice = creatSlice({
  name: 'todo',
  initialState,
  reducer: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), 
        text: action.payload  
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
    },


  }
}
)

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer





