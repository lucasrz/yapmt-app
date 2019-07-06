import axios from 'axios';
const apiURI = 'http://localhost:4000/api'

function addTask(action) {
  try {
    const data = {
      projectId: action.project._id,
      task: action.task,
    }
    
    return axios.post(`${apiURI}/task`, data)
      .then(res => res.data, err => { throw err });
  } catch (e) {
    throw e;
  }
}

function updateTask(action) {
  try {
    const data = {
      isDone: action.task.isDone
    }
    return axios.put(`${apiURI}/task/${action.task._id}`, data)
      .then(() => action.task, err => { throw err });
  } catch (e) {
    throw e;
  }
}


export {
  addTask,
  updateTask
}