import React, { Component } from "react";

class ListTasks extends Component {
  render() {
    const {tasks} = this.props;

    return(
      <div id="taskContainer">

          {tasks.map((task, key) => {
            return <div id="taskListDiv">
                <h3 key={task.id}>{task.text}

                <button
                id="edit"
                onClick={this.props.editHandler}
                value={task.id}
                >Edit
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
