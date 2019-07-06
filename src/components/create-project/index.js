import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProjectSaga } from '../../actions';
import './style.css';
import TaskList from '../../components/task-list';

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tasks: [],
      validProject: true,
      validationMessage: '',
    }
    
    this.updateInput = this.updateInput.bind(this);
    this.submitProject = this.submitProject.bind(this);
    this.getTaskslist = this.getTaskslist.bind(this);
  }

  getTaskslist(newTasks) {
    this.setState({ tasks: newTasks });
  }

  updateInput(event) {
    if (event.key === 'Enter') {
      return;
    }
    const target = event.target;
    const value = target.value;
    this.setState({ name: value });
  }

  submitProject(event) {
    if (event.key !== 'Enter') {
      return;
    }

    if (!this.state.name) {
      return this.setState({ validProject: false, validationMessage: 'Empty project name' });
    }

    this.props.createProject(this.state);
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.tasks) !== JSON.stringify(prevProps.tasks)) {
      this.setState({tasks: this.props.tasks})
    }
  }

  render() {
    const isvalidProject = this.state.validProject;
    const validationMessage = this.state.validationMessage;
    return (
      <div className="project-screen">
        <div className="screen-header">
          <input className="project-name-input" type="text" placeholder="New Project" name="name" ref="nameInput" onChange={this.updateInput} onKeyDown={this.submitProject}></input>
          {!isvalidProject && <p className="validation-error" > {validationMessage} </p>}
        </div>
        <TaskList tasks={[]}></TaskList>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  requestStatus: state.projectsReducer.requestStatus,
  project: state.projectsReducer.project,
  tasks: state.tasksReducer.tasks
});

const mapDispatchToProps = (dispatch) => ({
  createProject: (state) => dispatch(createProjectSaga(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);