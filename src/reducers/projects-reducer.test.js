import reducer from './index';
import { setProjects, setProject } from '../actions';
import { workerGetProjects } from '../sagas/watchers/projects';
import { workerCreateProject } from '../sagas/watchers/projects';

describe('Reducers', () => {
  const project = {
    name: 'testing',
    tasks: [{}]
  }

  it('Set Projects', () => {
    const initialState = {};
    const next = reducer(initialState, setProjects([project, project, project]))
    expect(next).toMatchSnapshot()
  });

  it('Set Project', () => {
    const initialState = {};
    const next = reducer(initialState, setProject(project))
    expect(next).toMatchSnapshot()
  });

  it('Request Success', () => {
    const next = workerGetProjects();
    expect(next).toMatchSnapshot();
  });

  it('Create Project', () => {
    const next = workerCreateProject(project);
    expect(next).toMatchSnapshot();
  });
});