import { all, fork } from 'redux-saga/effects';

import { watchProjectsSaga }  from './watchers/projects';
import { watchTasksSaga }  from './watchers/tasks';

export default function* root() {
  yield all([
    fork(watchProjectsSaga),
    fork(watchTasksSaga),
  ]);
}
