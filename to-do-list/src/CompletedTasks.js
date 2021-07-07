import React, { Component } from "react";

class CompletedTasks extends Component {
  render() {
    const {tasks} = this.props;

    return(
      <div id="taskContainer">

      <div id="tabsContainer">
        <button
          id="remainingTab"
          onClick={this.props.remainingTabsToggle}
          >remaining
        </button>

        <button
          id="doneTabActive"
          onClick={this.props.doneTabsToggle}
          >completed
        </button>
      </div>

      {tasks.map((task, key) => {
        return <div id="taskListDiv">
            <h3 id="doneh3" key={task.id}>{task.text}

            <button
            id="remove"
            onClick={this.props.removeHandler}
            value={task.id}
            >remove</button>

          </h3>
        </div>
      })}

      </div>
    );
  }
}


export default CompletedTasks;
