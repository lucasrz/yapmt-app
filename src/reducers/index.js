import { combineReducers } from 'redux';
import projectsReducer from './projects';
import tasksReducer from './tasks';

export default combineReducers({
  projectsReducer,
  tasksReducer
});
