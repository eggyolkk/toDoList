import React from "react";
import './modal.css';

export default class Modal extends React.Component {

  render() {
      if(!this.props.showModal){
        return null
      }
    return (
      <div className="modal">

      <div id="modalButtonsDiv">
        <button
          id="closeModalBtn"
          onClick={this.props.closeModal}
        >
          x
        </button>
      </div>

      <h1 id="modalh1">edit task</h1>
      <input
        id='inputEditTask'
        type='text'
        placeholder={this.props.editTaskText}
        value={this.props.taskEditInput}
        onChange={this.props.editChangeHandler}
      />

        <button
          id="doneModalBtn"
          onClick={this.props.editHandler}
          value={this.props.editTaskId}
        >
          ✓
        </button>

      </div>
    );
  }
}
