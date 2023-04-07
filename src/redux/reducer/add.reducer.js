import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  toDoList: [],
};

const addReducer = createReducer(initialState, {
  ADD_LIST: (state, action) => {
    const newValues = {
      ...action.payload,
      id: uuidv4(),
    };
    const newToDoList = [newValues, ...state.toDoList];
    return {
      ...state,
      toDoList: newToDoList,
    };
  },
  EDIT_LIST: (state, action) => {
    const { id, values } = action.payload;
    const newToDoList = [...state.toDoList];
    const index = state.toDoList.findIndex((item) => item.id === id);
    newToDoList.splice(index, 1, values);
    return {
      ...state,
      toDoList: newToDoList,
    };
  },
  REMOVE_LIST: (state, action) => {
    const { id } = action.payload;
    const newToDoList = [...state.toDoList];
    const index = state.toDoList.findIndex((item) => item.id === id);
    newToDoList.splice(index, 1);
    return {
      ...state,
      toDoList: newToDoList,
    };
  },
});

export default addReducer;
