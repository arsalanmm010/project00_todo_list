import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SAVE_TASK,
  EDIT_TASK,
} from "../actions/actionTypes";

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isEditing: true } : task
        ),
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.updatedTask }
            : task
        ),
      };

    case SAVE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isEditing: false } : task
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
