import React, { Component } from 'react';
import axios from 'axios';

import CurrentTaskInstructor from "./CurrentTaskInstructor";

class CurrentTemplateTask extends Component{
  constructor(props){
    super(props);

    this.state = {
      positionNo: this.props.position.position_no
    }
  }

  static getDerivedStateFromProps(props, state){
    if(props.position.position_no !== state.positionNo){
      return{
        positionNo: props.position.position_no
      }
    }
    return null;
  }

  // #region : FUNCTIONS
  handlePositionNoChange = (e) => {
    this.props.renumberPositions(parseInt(e.target.value), this.props.position, this.state.positionNo);
  }

  handleRemoveButtonClick = async(e) => {
    e.preventDefault();
    console.log(this);
    console.log(e);
    // console.log(this.props.position.position_id);
    let positionId = parseInt(this.props.position.position_id);
    // console.log(typeof(this.props.position.position_id));
    let data = {
      'position_id': positionId,
      'template_id': parseInt(this.props.position.template_id),
      'task_id': parseInt(this.props.position.task_id),
      'position_no': parseInt(this.props.position.position_no)
    }
    console.log(data);
    axios.delete("/api/position", data);
    // console.log(res);
  }

  // #endregion


  // #region : RENDER
  // #region : RENDER - Position Numbers
  renderPositionNumbersShow(){
    return(
      <div>
        {this.state.positionNo}
      </div>
    )
  }

  renderPositionNumbersEdit(){
    return(
      <label>
        <input type="number" 
        min="1"
        value={this.state.positionNo} 
        onChange={
          (e) => {
            // let oldPosNo = this.state.positionNo;
            this.handlePositionNoChange(e)
          }
        }/>
      </label>
    )
  }

  renderPositionNumbersAdd(){

  }

  renderPositionNumbersMaster(){
    // "SHOW" view
    if(!this.props.isEdit && !this.props.isAdd){
      return(
        
        <div>
          {this.renderPositionNumbersShow()}
        </div>
      )
    }

    // "EDIT" view
    if(this.props.isEdit && !this.props.isAdd){
      return(
        <div>
          {this.renderPositionNumbersEdit()}
        </div>
      )
    }

    // "ADD" view
    if(this.props.isEdit && this.props.isAdd){
      return(
        <div>
        </div>
      )
    }

  }

  // #endregion


  // #region : RENDER - Task Buttons
  renderTemplateTaskButtonsEdit(){
    return(
      <div className="col s2 center-align">
        <button 
        className="btn-small grey darken-1"
        type="button"
        onClick={(e) => {this.handleRemoveButtonClick(e)}}>
          remove
        </button>
      </div>
    )
  }

  renderTemplateTaskButtonsMaster(){
    // "SHOW" view
    if(!this.props.isEdit && !this.props.isAdd){
      return(
        <div></div>
      )
    }

    // "EDIT" view
    if(this.props.isEdit && !this.props.isAdd){
      return(
        <div>
          {this.renderTemplateTaskButtonsEdit()}
        </div>
      )
    }

    // "ADD" view
    if(this.props.isEdit && this.props.isAdd){
      return(
        <div></div>
      )
    }

    return(
      <div></div>
    )
  }
  // #endregion

  // #endregion
 

  render(){
    // console.log(this);
    // console.log(`position_id: ${this.props.position.position_id}`);
    return(
      <div className="col s12 grey-text text-darken-3 valign-wrapper">
        {/* <form> */}
          <div className="col s1 center-align">
            {this.renderPositionNumbersMaster()}
          </div>
          
          <div className="col s9">
            <div>
              {this.props.position.task_description}
            </div>
            <div>
              <i><CurrentTaskInstructor id={this.props.position.instructor_id}/></i>
            </div>
          </div>

          <div className="col s2 center-align">
            {this.renderTemplateTaskButtonsMaster()}
          </div>
        {/* </form> */}
      </div>
    );
  }

}



export default CurrentTemplateTask;