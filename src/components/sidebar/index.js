import React, { Component } from 'react';
import './style.css';
import { setProject } from '../../actions';
import { connect } from 'react-redux';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProject: {}
    }
  }

  selectItem(name) {
    let selected = this.state.selectedProject;
    if(selected === name) {
      return;
    } 

    this.setState({selectedProject: name})
 }

  componentDidUpdate (prevProps) {
    if (JSON.stringify(this.props.projects) !== JSON.stringify(prevProps.projects) && prevProps.projects) {
        this.setState({
          projects: this.props.projects
        });
        let projectsLength = this.props.projects.length - 1;
        this.props.setProject(this.props.projects[projectsLength]);
        this.setState({selectedProject: this.props.projects[projectsLength].name})
    }    
  }

  render() {
    return (
      <div className="sidebar">
        <div className="project-list">
          <h1 className="sidebar-title">Projects</h1>
          {
             this.state && this.state.projects && this.state.projects.length > 0 && (
              <div>
                {this.state.projects.map(({
                  name,
                }, i) => (
                    <div key={i} onClick={() => { 
                      this.props.setProject(this.state.projects[i]); 
                      this.selectItem(name);
                    }} className="project-btn">
                      <b className="project-name">{name}</b>
                     {this.state.selectedProject === name && <b className="arrow-icon">&#x2192;</b>}
                    </div>
                  ))}
              </div>
            )
          }
          <div className="new-project-btn-container">
            <button className="new-project-btn" onClick={() => this.props.setProject(null)}>+ Add New Project</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setProject: (state) => dispatch(setProject(state)),
});

export default connect(null, mapDispatchToProps)(Sidebar);