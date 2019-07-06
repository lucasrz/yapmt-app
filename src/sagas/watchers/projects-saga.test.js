import {watchProjectsSaga} from './projects';
import { takeLatest } from 'redux-saga/effects';
import { GET_PROJECTS_SAGA, CREATE_PROJECT_SAGA, DELETE_PROJECT_SAGA } from '../../constants';
import {workerGetProjects} from './projects';
import {workerCreateProject} from './projects';
import {workerDeleteProject} from './projects';

describe('Project GET_PROJECTS_SAGA', () => {
  const watch = watchProjectsSaga()
  it('should watch otherAction', () => {
    const effect = watch.next().value
    expect(effect).toStrictEqual(takeLatest(GET_PROJECTS_SAGA, workerGetProjects))
  });

  it('should watch CREATE_PROJECT_SAGA', () => {
    const effect = watch.next().value
    expect(effect).toStrictEqual(takeLatest(CREATE_PROJECT_SAGA, workerCreateProject))
  });

  it('should watch DELETE_PROJECT_SAGA', () => {
    const effect = watch.next().value
    expect(effect).toStrictEqual(takeLatest(DELETE_PROJECT_SAGA, workerDeleteProject))
  });

  it('All workers should return an empty object', () => {
    expect(workerDeleteProject()).toMatchObject({})
    expect(workerCreateProject()).toMatchObject({})
    expect(workerGetProjects()).toMatchObject({})
  });
})

