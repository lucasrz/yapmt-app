import {
  SET_PROJECTS,
  SET_PROJECT,
  GET_PROJECTS_SAGA,
  CREATE_PROJECT_SAGA,
  DELETE_PROJECT_SAGA,
  ADD_TASK_SAGA,
  SET_TASK,
  UPDATE_TASK_SAGA,
  UPDATE_PROJECT_STATUS,
  SET_TASKS,
} from '../constants';

export function setProjects(projects) {
  return {
    type: SET_PROJECTS,
    projects
  };
}

export function setProject(project) {
  return {
    type: SET_PROJECT,
    project
  };
}

export function updateProjectStatus(project) {
  return {
    type: UPDATE_PROJECT_STATUS,
    status: project.status
  };
}

export function setTask(task) {
  return {
    type: SET_TASK,
    task
  };
}

export function setTasks(state) {
  return {
    type: SET_TASKS,
    tasks: state.tasks
  };
}


export function getProjectsSaga() {
  return {
    type: GET_PROJECTS_SAGA,
  };
}

export function createProjectSaga(project) {
  return {
    type: CREATE_PROJECT_SAGA,
    project
  };
}

export function deleteProjectsSaga(project) {
  return {
    type: DELETE_PROJECT_SAGA,
    project
  };
}

export function addTaskSaga(task) {
  return {
    type: ADD_TASK_SAGA,
    task
  };
}

export function updateTaskSaga(task) {
  return {
    type: UPDATE_TASK_SAGA,
    task
  };
}
