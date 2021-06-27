import React, { Component } from "react";
import { HiOutlineCheckCircle } from 'react-icons/hi'

class ListTasks extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const {tasks} = this.props;

    return(
      <div>
        <ul>
          {tasks.map((task) => {
            return <li key={task.id}>{task.text}

              {/*<HiOutlineCheckCircle size={30} className="checkButton" />*/}

              <button
              id="completed"
              onClick={this.props.completeHandler}
              value={task.id}
              >Complete</button>

              <button
              id="edit"
              onClick={this.props.editHandler}
              value={task.id}
              >Edit
              </button>

            </li>
          })}
        </ul>
      </div>
    );
  }
}


export default ListTasks;
