import { createSlice } from "@reduxjs/toolkit";

//create random id
import { v4 as uuid } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: uuid(), title: "Hit the gym", completed: false },
    { id: uuid(), title: "Lunch with friends", completed: false },
    { id: uuid(), title: "Self study", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    markComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteItem: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const {addTodo,deleteItem,markComplete} = todoSlice.actions;

export default todoSlice.reducer;
