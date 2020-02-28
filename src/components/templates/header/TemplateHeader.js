import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

import { getUnallocatedTasks } from '../../../actions';

import TemplateHeaderButtons from '../header/Buttons';

import "../template.css";
import "../../../commonStyles.css";

class TemplateHeader extends Component{
  constructor(props){
    super(props);

    this.state = {
      unallocatedTasks: []
    }

  }


// #region : FUNCTIONS
  handleAddButtonClick = async() => {
    this.props.toggleIsAdd();
  }

  // handleChangePositionSubmitButtonClick = async () => {
  handleChangePositionSubmitButtonClick = () => {
    console.log(this);

    // await Promise.all(

      // this.props.selectedTasks.map(
      //   // (task) => {
      //     async(task) => {
      //     maxPos++;
      //     let data = {
      //       "template_id": this.props.parent.currentTemplate.template_id,
      //       "task_id": task,
      //       "position_no": maxPos
      //     }
      //     // console.log(data);
      //     // return(data);
      //     let result = await axios.post("/api/position", data);
      //     console.log(result);
      //   }
      // )
    // )
    // return(positions);

  }

  // #region : Commented out
  // handleNewTaskSubmitButtonClick = async () => {
  //   let positions = [];
  //   // console.log(this);
  //   // console.log(this.props.selectedTasks);
  //   // console.log(this.props.parent.currentTemplate.template_id);
  //   // console.log(this.props.parent.currentTemplate.positions);
  //   this.props.currentTemplate.positions.map(
  //     (position) => {
  //       positions.push(position.position_no);
  //       return(positions);
  //     }
  //   )
  //   // console.log(typeof(positions));
  //   let maxPos = Math.max(...positions);
  //   // console.log(maxPos);
  //   // console.log(typeof(maxPos));

  //   await Promise.all(
  //     this.props.selectedTasks.map(
  //       // (task) => {
  //         async(task) => {
  //         maxPos++;
  //         let data = {
  //           "template_id": this.props.parent.currentTemplate.template_id,
  //           "task_id": task,
  //           "position_no": maxPos
  //         }
  //         // console.log(data);
  //         // return(data);
  //         let result = await axios.post("/api/position", data);
  //         console.log(result);
  //       }
  //     )
  //   )
  //   // return(positions);

  // }
  // #endregion
// #endregion


  render(){
    console.log(this)
    return (
      <div className="card-title">
        <div 
        className="row deep-orange darken-4 valign-wrapper 
        custom-template-header">
          <div className="col s8">
            <h5>{this.props.currentTemplate.description}</h5>
          </div>
          <div className="col s4 right-align">
            <TemplateHeaderButtons 
            isEdit={this.props.isEdit}
            isAdd={this.props.isAdd}
            toggleIsEdit={this.props.toggleIsEdit}
            toggleIsAdd={this.props.toggleIsAdd}
            handleAddButtonClick={this.props.handleAddButtonClick}
            handleTasksSubmitButtonClick={this.props.handleTasksSubmitButtonClick}
            handleNewTasksSubmitButtonClick={this.props.handleNewTasksSubmitButtonClick}
            handleEditButtonClick={this.props.handleEditButtonClick}/>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    _unallocatedTasks: state.unallocated_tasks
  };
}


export default connect(mapStateToProps,{getUnallocatedTasks})(TemplateHeader)
