import reducer from './index';
import { setTask } from '../actions';

describe('Reducers', () => {
  const task = {
    isDone: true,
    _id: '5d1fff233bbd50c6e5547c3f',
    description: "aaa",
    owner: "@aaaa",
    dueDate: "11/11",
  }

  it('Set Task', () => {
    const initialState = {};
    const next = reducer(initialState, setTask(task))
    expect(next).toMatchSnapshot()
  });
});