import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import TaskList from '../task-list';
import { deleteProjectsSaga, setProject } from '../../actions';
class ProjectDetails extends Component {
  status;
  constructor(props) {
    super(props);
  
    this.deleteProject = this.deleteProject.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  deleteProject() {
    const canDelete = window.confirm(`Do you really want to delete ${this.props.project.name}?`);

    if(!canDelete) {
      return;
    }

    this.props.deleteProject(this.props.project);
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.project.tasks) !== JSON.stringify(prevProps.project.tasks)) {
      this.setState({
        tasks: this.props.project.tasks
      });
    }
  }

  render() {
    return (
      <div className="project-screen">
        <div className="screen-header">
          <h1 className="header-title">{this.props.project.name}</h1>
          <div className="delete-project-btn">
            <button className="delete-project-txt" onClick={this.deleteProject}>Delete Project</button>
          </div>
          <div className="project-status">
            <b className="header-status-txt">{this.props.status}</b>
          </div>
        </div>
        <TaskList project={this.props.project} ></TaskList>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.projectsReducer.status,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProject: (state) => dispatch(deleteProjectsSaga(state)),
  setProject: (state) => dispatch(setProject(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);