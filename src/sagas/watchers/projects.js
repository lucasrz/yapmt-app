import { put, takeLatest, call } from 'redux-saga/effects';
import { setProjects } from '../../actions';
import { createProject, getProjects, deleteProject } from '../../services/project-service';
import { GET_PROJECTS_SAGA, CREATE_PROJECT_SAGA, DELETE_PROJECT_SAGA, REQUEST_ERROR, SET_PROJECT  } from '../../constants';

function* workerGetProjects() {
  const projects = yield call(getProjects);
  yield put(setProjects(projects));
}

function* workerCreateProject(action) {
  try { 
    const data = yield call(createProject, action);
    yield call(workerGetProjects, action);
    yield put({ type: SET_PROJECT, data });
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error })
  }
}

function* workerDeleteProject(action) {
  try { 
    yield call(deleteProject, action);
    yield put({type: SET_PROJECT});
    yield call(workerGetProjects, action);
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error })
  }
}

function* watchProjectsSaga() {
  yield takeLatest(GET_PROJECTS_SAGA, workerGetProjects);
  yield takeLatest(CREATE_PROJECT_SAGA, workerCreateProject);
  yield takeLatest(DELETE_PROJECT_SAGA, workerDeleteProject);
}

export {
  watchProjectsSaga,
  workerDeleteProject,
  workerCreateProject,
  workerGetProjects,
}