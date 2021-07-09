import React, { Component } from "react";
import Modal from "./Modal"

class ListTasks extends Component {
  render() {
    const {tasks} = this.props;

    return(
      <div id="taskContainer">

        <Modal editHandler={this.props.editHandler} editChangeHandler={this.props.editChangeHandler} taskEditInput={this.props.taskEditInput} closeModal={this.props.closeHandler} showModal={this.props.showModal} editTaskText={this.props.editTaskText} editTaskId={this.props.editTaskId}/>
        <div id="tabsContainer">
          <button
            id="remainingTabActive"
            onClick={this.props.remainingTabsToggle}
            >remaining
          </button>

          <button
            id="doneTab"
            onClick={this.props.doneTabsToggle}
            >completed
          </button>
        </div>

          {tasks.map((task, key) => {
            return <div id="taskListDiv">
                <h3 key={task.id}>{task.text}

                <button
                id="edit"
                onClick={this.props.openModalHandler}
                value={task.id}
                >edit
                </button>

                <button
                id="completed"
                onClick={this.props.completeHandler}
                value={task.id}
                >✓</button>

              </h3>
            </div>
          })}
      </div>
    );
  }
}


export default ListTasks;
