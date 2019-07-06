import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTaskSaga, updateTaskSaga, updateProjectStatus, setTasks } from '../../actions';
import taskHelper from '../../helpers/task-helper';
import './style.css';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {},
      tasks: this.props.project ?  this.props.project.tasks : this.props.tasks ,
      project: this.props.project,
      validTask: true
    }

    this.addTask = this.addTask.bind(this);
    this.getTaskInput = this.getTaskInput.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.showTaskInput = this.showTaskInput.bind(this);
  }

  componentDidMount() {
    this.updateStatus();
  }

  getTaskInput(event) {
    const target = event.target;
    const value =  target.value;
    this.setState({
      task: value
    });
  }

  addTask(event) {
    if (event.key !== 'Enter') {
      return;
    }

    const taskRegex = new RegExp('[a-zA-Z0-9]+, @[a-zA-Z0-9]+, ?([0-9]?[0-9]/[0-3]?[0-9])', 'mig');

    if (!taskRegex.test(this.state.task)) {
      return this.setState({ validTask: false });
    }

    const parsedTask = taskHelper.parse(this.state.task);
    
    this.setState({ task: parsedTask }, () => {
      if(!this.props.project) {
        return this.appendNewTask();
      }

      this.sendToApi();
    });
  }

  sendToApi() {
    this.props.addTask(this.state);
  }

  appendNewTask() {
    if(!this.state.task) {
      return;
    }
    
    this.refs.taskInput.value = '';
    const tasks = this.state.tasks.slice();
    tasks.push(this.state.task);
    this.setState(({
      task: null,
      validTask: true,
      tasks: tasks
    }), () => { 
      this.props.setTasks(this.state);
      this.updateStatus()
    });
  }

  isLate(task) {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();

    if(new Date(task.dueDate) < new Date(`${month}/${day}`)){
      return task.isLate = true;
    }

    return task.isLate = false;
  }

  updateStatus() {
    let tasks = this.state.tasks;
    if(!tasks) {
      return;
    }
    tasks.forEach(task => {
      this.isLate(task)
    });

    let lateTasks = tasks.filter((task) => task.isLate === true && task.isDone === false).length;
    let completedTasks = tasks.filter((task) => task.isDone === true ).length;

    let status = `${completedTasks}/${lateTasks}/${tasks.length}`;

    tasks.sort( this.compareTask ).reverse();

    this.setState({status: status, tasks: tasks}, () => this.props.updateProjectStatus(this.state));
  }

  updateTask(i) {
    let tasks = this.state.tasks.slice();
    let task = tasks[i];
    task.isDone = !task.isDone;
    
    if(task._id) {
      this.setState({task: task}, () => {
        this.props.updateTask(this.state);
        this.updateStatus();
      });
    }

    this.setState({tasks: tasks}, () => this.updateStatus());
  }

  getStatus(i) {
    const task = this.state.tasks[i];
    
    if(task.isDone === true ) {
      return 'task-item-txt completed-task'
    }

    if(task.isLate === true) {
      return 'task-item-txt late-task'
    }

    return 'task-item-txt';
  }

  compareTask(a,b) {
    if (new Date(a.dueDate) < new Date(b.dueDate)) {
      return -1;
    }
    if (new Date(a.dueDate) > new Date(b.dueDate)) {
      return 1;
    }
    return 0;
  }


  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props) !== JSON.stringify(prevProps)) {
      this.setState({ 
        project: this.props.project,
        tasks: this.props.project ?  this.props.project.tasks : this.props.tasks,
      }, () => this.updateStatus());  
    }
    
    if (JSON.stringify(this.props.task) !== JSON.stringify(prevProps.task)) {
      this.setState({ 
        task: this.props.task ? this.props.task : ''
      }, () => this.appendNewTask());
    }    
  }
  
  showTaskInput() {
    this.setState({showInput: true});
  }

  render() {
    const isValidTask = this.state.validTask;
    const tasks = this.state.tasks;
    const showInput = this.state.showInput;
    return (
      <div className="task-list-container" >
        {
          tasks && tasks.length > 0 && (
            <div className="task-list">
              {tasks.map(({ description, owner, dueDate, isDone }, i) => (
                <div key={i} className="task-item">
                  <input className="task-check" type="checkbox"  checked={ isDone || false } onChange={() => this.updateTask(i)}></input>
                  <b className={this.getStatus(i)}>{description}, {owner}, {dueDate} </b>
                </div>))}
            </div>
          )
        }
        {showInput && <input type="text" className="task-input" name="task" placeholder="Enter a new task, @owner, M/d" ref="taskInput" onChange={this.getTaskInput} onKeyDown={this.addTask}></input> }
        {!isValidTask && <p className="validation-error" > Invalid task please follow the placeholder example! </p>}
        <div className="new-task-btn">
          <button className="new-btn-txt" onClick={this.showTaskInput}>+ Add Task</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  task: state.tasksReducer.task,
});


const mapDispatchToProps = (dispatch) => ({
  addTask: (state) => dispatch(addTaskSaga(state)),
  updateTask: (state) => dispatch(updateTaskSaga(state)),
  setTasks: (state) => dispatch(setTasks(state)),
  updateProjectStatus: (state) => dispatch(updateProjectStatus(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);