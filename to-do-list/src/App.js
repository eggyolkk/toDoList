import React, { Component } from "react";
import './app.css';
import ListTasks from './ListTasks';

class AddTaskBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: '',
      tasksList: []
    }
  }

  handleTaskChange = event => {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      task: '',
      tasksList: this.state.tasksList.concat(this.state.task)
    })
  }

  render() {
    const { task, tasksList } = this.state

    return(
      <div id="taskbar">
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={task}
            placeholder='What do you need to do?'
            onChange={this.handleTaskChange}
          />

        <button type='submit'>Add Task</button>
        <ListTasks tasks={tasksList} />
        </form>
      </div>
    );
  }
}

export default AddTaskBar;
