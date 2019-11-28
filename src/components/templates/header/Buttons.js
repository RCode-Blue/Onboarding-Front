import React, { Component } from 'react';

import "../../../commonStyles.css";

class TemplateHeaderButtons extends Component{

// #region: RENDER
  // "Show" buttons view
  renderTemplateHeaderButtonsShow(){
    return(
      <div className="">
        <button
        className="
        btn-small grey darken-1
        common-buttons"
        type="button"
        onClick={this.props.handleEditButtonClick}>
          edit
        </button>
      </div>
    )
  }

  // "EDIT" buttons view
  renderTemplateHeaderButtonsEdit(){
    return(
      <div className="">
        <button
        className="btn-small grey darken-1"
        type="button"
        style={{margin: "1px"}}
        onClick={this.props.handleTasksSubmitButtonClick}>
          Submit
        </button>
        <button
        className="btn-small grey darken-1"
        type="button"
        style={{margin: "1px"}}
        onClick={this.props.handleAddButtonClick}>
          Add
        </button>
        <button
        className= "btn-small grey darken-1"
        type="button"
        style={{margin: "1px"}}
        onClick={() => {
          this.props.toggleIsEdit();
        }}>
          Cancel
        </button>
      </div>
    )
  }

  // "ADD" buttons view
  renderTemplateHeaderButtonsAdd(){
    return(
      <div>
        <button
        className="
        btn-small grey darken-1
        common-buttons"
        type="button"
        onClick={(e) => {
          this.props.handleNewTasksSubmitButtonClick();
        }}>
          submit
        </button>
        <button
          className= "btn-small grey darken-1"
          type="button"
          onClick={() => {
            this.props.toggleIsEdit(); 
            this.props.toggleIsAdd();
          }}>
            cancel
        </button>
      </div>
    )
  }

// #endregion

  render(){
    console.log(this)
    if(!this.props.isEdit && !this.props.isAdd){
      // "SHOW" view
      return(
        <div>
          {this.renderTemplateHeaderButtonsShow()}
        </div>
      )
    }

    if(this.props.isEdit && !this.props.isAdd){
      // "EDIT" 
      return(
        <div>
          {this.renderTemplateHeaderButtonsEdit()}
        </div>
      )
    }

    if(this.props.isEdit && this.props.isAdd){
      // "ADD" view
      return(
        <div>
          {this.renderTemplateHeaderButtonsAdd()}
        </div>
      )
    }
  }

}

export default TemplateHeaderButtons;