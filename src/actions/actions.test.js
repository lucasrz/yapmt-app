import configureStore from 'redux-mock-store';
import { GET_PROJECTS_SAGA, SET_PROJECTS, SET_PROJECT, ADD_PROJECT_SAGA, CREATE_PROJECT_SAGA, DELETE_PROJECT_SAGA, SET_TASK, ADD_TASK_SAGA, UPDATE_TASK_SAGA } from '../constants';
import * as actions from './index';

const mockStore = configureStore();
const store = mockStore();

describe('select_actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  const task = {
    isDone: true,
    _id: '5d1fff233bbd50c6e5547c3f',
    description: "aaa",
    owner: "@aaaa",
    dueDate: "11/11",
  }

  const project = {
    name: 'testing',
    tasks: [task]
  }

  describe('Set Projects', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'project': project,
          'type': SET_PROJECT,
        },
      ];

      store.dispatch(actions.setProject(project));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Set Projetcs', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'projects': [project, project],
          'type': SET_PROJECTS,
        },
      ];

      store.dispatch(actions.setProjects([project, project]));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Set Task', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'task': task,
          'type': SET_TASK,
        },
      ];

      store.dispatch(actions.setTask(task));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  describe('Get projects saga', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': GET_PROJECTS_SAGA,
        },
      ];

      store.dispatch(actions.getProjectsSaga());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Create project saga', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': CREATE_PROJECT_SAGA,
          'project': project
        },
      ];

      store.dispatch(actions.createProjectSaga(project));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Add task saga', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': ADD_TASK_SAGA,
          'task': task
        },
      ];

      store.dispatch(actions.addTaskSaga(task));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  describe('Delete projects saga', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': DELETE_PROJECT_SAGA,
          'project': project
        },
      ];

      store.dispatch(actions.deleteProjectsSaga(project));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Update task saga', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': UPDATE_TASK_SAGA,
          'task': task
        },
      ];

      store.dispatch(actions.updateTaskSaga(task));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});