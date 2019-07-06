import taskHelper from './task-helper';

describe('Task Helper', () => {
  it('Has to parse a string task to an onject', () => { 
    const taskString = 'testing task helper, @Tester, 5/10'
    const parsedTask = taskHelper.parse(taskString);
    const expected = {
      owner: '@Tester',
      description: 'testing task helper',
      dueDate: '5/10'
    }

    expect(parsedTask).toStrictEqual(expected);
  });
});
