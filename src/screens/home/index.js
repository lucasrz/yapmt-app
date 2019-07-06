import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import CreateProject from '../../components/create-project';
import ProjectDetails from '../../components/project-details';
import Sidebar from '../../components/sidebar';
import { getProjectsSaga } from '../../actions';

class Home extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.error) !== JSON.stringify(prevProps.error)) {
      window.alert('Request failed, please try again!')
    }
  }
  
  render() {
    const project = this.props.project;

    return (
      <div className="container">
        {!project &&
          <CreateProject></CreateProject>
        }
        {project &&
          <ProjectDetails project={project}></ProjectDetails>
        }
        <Sidebar projects={this.props.projects}></Sidebar>
      </div>
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
}

const mapStateToProps = (state) => ({
  projects: state.projectsReducer.projects,
  project: state.projectsReducer.project,
  error: state.projectsReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  getProjects: () => dispatch(getProjectsSaga()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);