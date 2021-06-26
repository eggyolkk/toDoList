import React, { Component } from "react";

class ListTasks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trytext: ''
    }
  }

  

    render() {
    const {tasks} = this.props;
    const {trytext} = this.state.trytext

    return(
      <div>
        <ul>
          {tasks.map((task) => {
            return <li>{task} <button id="completed" onClick="handleComplete">Completed</button></li>
          })}
        </ul>
        <h1>{trytext}</h1>
      </div>
    );
  }
}



export default ListTasks;
