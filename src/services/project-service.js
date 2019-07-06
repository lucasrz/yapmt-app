import axios from 'axios';
const apiURI = 'http://localhost:4000/api'

function createProject(action) {
  try{
    return axios.post(`${apiURI}/project`, action.project)
      .then(res => res.data.res , err => { throw err });
  } catch (e) {
    throw e;
  }
}

function getProjects() {
  return axios.get(`${apiURI}/project`).then(res => {
    if (!res || !res.data || !res.data.res) {
      return [];
    }
    return res.data.res;
  }, err => { throw err });
}

function deleteProject(action) {
  return axios.delete(`${apiURI}/project/${action.project._id}`)
    .then(() => action.project, err => { throw err });
}


export {
  createProject,
  getProjects,
  deleteProject,
}