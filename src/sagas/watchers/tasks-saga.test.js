import { watchTasksSaga } from './tasks';
import { takeLatest } from 'redux-saga/effects';
import { ADD_TASK_SAGA, UPDATE_TASK_SAGA } from '../../constants';
import { workerUpdateTask } from './tasks';
import { workerAddTask } from './tasks';

describe('Project ADD_TASK_SAGA', () => {
  const watch = watchTasksSaga()
  it('should watch otherAction', () => {
    const effect = watch.next().value
    expect(effect).toStrictEqual(takeLatest(ADD_TASK_SAGA, workerAddTask))
  });

  it('should watch UPDATE_TASK_SAGA', () => {
    const effect = watch.next().value
    expect(effect).toStrictEqual(takeLatest(UPDATE_TASK_SAGA, workerUpdateTask))
  });
});

