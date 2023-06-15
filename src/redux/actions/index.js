import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SAVE_TASK,
  EDIT_TASK,
} from "./actionTypes";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const editTask = (id) => {
  return {
    type: EDIT_TASK,
    payload: id,
  };
};

export const updateTask = (id, updatedTask) => {
  return {
    type: UPDATE_TASK,
    payload: {
      id,
      updatedTask,
    },
  };
};

export const saveTask = (id) => {
  return {
    type: SAVE_TASK,
    payload: id,
  };
};
