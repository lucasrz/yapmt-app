import { SET_TASK, SET_TASKS } from '../constants';

const initialState = { task: {} };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        task: action.task
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.tasks
      };
    default:
      return state;
  }
}
