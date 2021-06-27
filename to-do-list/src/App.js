import React, { Component } from "react";
import './app.css';
import ListTasks from './ListTasks';


class AddTaskBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: '',
      tasksList: [],
      apptext: ''
    }

    this.handleComplete = this.handleComplete.bind(this)
  }

  handleTaskChange = e => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      task: '',
      tasksList: [...this.state.tasksList, {text: this.state.task, id: Math.floor(Math.random() * 10000)}]
    })
  }

  handleComplete = e => {
    e.preventDefault()

    const listCopy = [...this.state.tasksList]
    const updatedList = listCopy.filter(task => task.id !== parseInt(e.target.value))

    this.setState({
      tasksList: updatedList,
    })
  }

  handleEdit = e => {
    e.preventDefault()

    const newList = []

    for (var i in this.state.tasksList){
      if (this.state.tasksList[i].id !== parseInt(e.target.value)) {
        newList.push({text: this.state.tasksList[i].text, id: this.state.tasksList[i].id})
      } else {
        newList.push({text: 'changed', id: this.state.tasksList[i].id})
      }
    }

    this.setState({
      tasksList: newList
    })
  }


  render() {
    const { task, tasksList, apptext } = this.state
    const maptask = tasksList.map((task)=><h2>{task.text}{task.id}</h2>)

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
        <ListTasks tasks={tasksList} completeHandler={this.handleComplete} editHandler={this.handleEdit}/>
        <h1>Apptext: {apptext}</h1>
        <h2>Current tasks: {maptask}</h2>

      </form>
      </div>
    );
  }
}

export default AddTaskBar;
