import { SET_PROJECT, SET_PROJECTS, REQUEST_ERROR, REQUEST_SUCCESS, CREATE_PROJECT, UPDATE_PROJECT_STATUS } from '../constants';

const initialState = { projects: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.projects
      };
    case SET_PROJECT:
      return {
        ...state,
        project: action.data ? action.data : action.project
      };
    case REQUEST_ERROR:
      return {
        ...state,
        error: action
      }
    case REQUEST_SUCCESS:
      return {
        ...state,
        requestStatus: action
      }
    case CREATE_PROJECT:
      return {
        ...state,
        newProject: action 
      }
    case UPDATE_PROJECT_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

