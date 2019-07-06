import * as constants from './index';
import { Item } from 'semantic-ui-react';

describe('Constantst', () => {
  it('GET_PROJECTS_SAGA', () => {
    expect(constants[constants.GET_PROJECTS_SAGA]).toEqual(constants.GET_PROJECTS_SAGA);
  });

  it('CREATE_PROJECT_SAGA', () => {
    expect(constants[constants.CREATE_PROJECT_SAGA]).toEqual(constants.CREATE_PROJECT_SAGA);
  });

  it('DELETE_PROJECT_SAGA', () => {
    expect(constants[constants.DELETE_PROJECT_SAGA]).toEqual(constants.DELETE_PROJECT_SAGA);
  });

  it('ADD_TASK_SAGA', () => {
    expect(constants[constants.ADD_TASK_SAGA]).toEqual(constants.ADD_TASK_SAGA);
  });

  it('UPDATE_TASK_SAGA', () => {
    expect(constants[constants.UPDATE_TASK_SAGA]).toEqual(constants.UPDATE_TASK_SAGA);
  });

  it('SET_PROJECTS', () => {
    expect(constants[constants.SET_PROJECTS]).toEqual(constants.SET_PROJECTS);
  });

  it('SET_PROJECT', () => {
    expect(constants[constants.SET_PROJECT]).toEqual(constants.SET_PROJECT);
  });

  it('SET_TASK', () => {
    expect(constants[constants.SET_TASK]).toEqual(constants.SET_TASK);
  });

  it('REQUEST_SUCCESS', () => {
    expect(constants[constants.REQUEST_SUCCESS]).toEqual(constants.REQUEST_SUCCESS);
  });

  it('REQUEST_ERROR', () => {
    expect(constants[constants.REQUEST_ERROR]).toEqual(constants.REQUEST_ERROR);
  });

  it('CREATE_PROJECT', () => {
    expect(constants[constants.CREATE_PROJECT]).toEqual(constants.CREATE_PROJECT);
  });
});