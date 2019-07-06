import { put, takeLatest, call } from 'redux-saga/effects';
import { setTask } from '../../actions';
import { addTask, updateTask } from '../../services/task-service';
import { ADD_TASK_SAGA, UPDATE_TASK_SAGA, REQUEST_ERROR, GET_PROJECTS_SAGA  } from '../../constants';

function* workerAddTask(action) {
  try { 
    let task = yield call(addTask, action.task);
    task = task.res;
    yield put(setTask(task));
    yield put({ type: GET_PROJECTS_SAGA })
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error })
  }
}

function* workerUpdateTask(action) {
  yield call(updateTask, action.task);
}
 
function* watchTasksSaga() {
  yield takeLatest(ADD_TASK_SAGA, workerAddTask);
  yield takeLatest(UPDATE_TASK_SAGA, workerUpdateTask);
}

export {
  watchTasksSaga,
  workerUpdateTask,
  workerAddTask,
}
