import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

import  CurrentSetTaskDetails  from '../tasks/currentSetTask';
import {getInstructorDetails } from '../../actions';

import TaskInstructorDetails from '../users/InstructorDetailsSet';

class TaskDetails extends Component {
  constructor(props){
    // console.log(props)
    super(props);
    this.state = {
      isEdit: false,
      isComplete: props.task.completed,
      completionDate: props.task.completionDate
    }
  }


  renderTaskDescription(){
    return(
      <div>
        <div className="row green lighten-5 valign-wrapper" style={{"height": "35px", "marginBottom": "10px", "marginTop": "25px"}}>
          
            <div className="col s1" style={{"paddingRight": "5px"}}>
              {this.props.task.task_position} 
            </div>
            <div className="col s9" style={{"paddingRight": "5px"}}>
              {this.props.task.task_description}
            </div>
            <div className="col s2" style={{"paddingRight": "5px"}}>
              
            </div>
          
        </div>
      </div>
    )
  }

  
  renderTaskDetailsShow(){
    // console.log(this.props.task);
    return(
      <div>
        <div className="row valign-wrapper" style={{"marginBottom": "10px"}}>
          <div className="col s1" style = {{"paddingRight": "5px"}}>
            Notes:
          </div>
          <div className="col s11" style = {{"paddingRight": "5px"}}>
            {this.props.task.task_notes}
          </div>
        </div>
        <div className="row valign-wrapper" style={{"marginBottom": "10px"}}>
          <div className="col s2" style = {{"paddingRight": "5px"}}>
            Completed:
          </div>
          <div className="col s2" style = {{"paddingRight": "5px"}}>
            <input type="checkbox"/>
          </div>
          <div className="col s4" style = {{"paddingRight": "5px"}}>
            {this.props.task.completed}
          </div>
          <div className="col s2" style = {{"paddingRight": "5px"}}>
            Completion date:
          </div>
          <div className="col s4" style = {{"paddingRight": "5px"}}>
            {this.props.task.completion_date}
          </div>
        </div>
      </div>
    )
  }
 

  renderTaskDetailsEdit(){
    return(
      <div className="blue-grey lighten-5">
        <div className="row valign-wrapper" style={{"marginBottom": "10px"}}>
          <div className="col s1" style = {{"paddingRight": "5px"}}>
            Notes:
          </div>
          <div className="col s11" style = {{"paddingRight": "5px"}}>
            {this.props.task.task_notes}
          </div>
        </div>
        <div className="row valign-wrapper" style={{"marginBottom": "10px"}}>
          <div className="col s2" style = {{"paddingRight": "5px"}}>
            Completed:
          </div>
          <div className="col s2" style = {{"paddingRight": "5px"}}>
            
          </div>
          <div className="col s4" style = {{"paddingRight": "5px"}}>
            {this.props.task.completed}
          </div>
          <div className="col s2" style = {{"paddingRight": "5px"}}>
            Completion date:
          </div>
          <div className="col s4" style = {{"paddingRight": "5px"}}>
            {this.props.task.completion_date}
          </div>
        </div>
        <div className="row valign-wrapper" style={{"marginBottom": "10px"}}>
          <div className="col s12 center-align">
            <button type="button">
              Save
            </button>
          </div> 
        </div>
      </div>
    )
  }


  renderTaskDetails(task){
    // console.log(task)

    return(
      <div key = {task.id}>
        <CurrentSetTaskDetails task = {this.props.task}/>
      </div>
    )
  }


  render(){
    // console.log(this.props);
    const {task} = this.props;
    if(!this.props.task.instructor_id){
      return(
        <div>
          <h4>Task Loading...</h4>
        </div>
      );
    }

    return(
      <div>
        {this.renderTaskDescription()}
        
        <TaskInstructorDetails task = {this.props.task}/>
        {this.renderTaskDetails(task)}
      </div>
      );


  }
}



// function mapStateToProps(state){
  // console.log(state);
  // return {
    // instructor_id: state.instructor_id,
    // instructor: state.instructor
    // setTasks: state.set.tasks
  // }
// }


export default connect( null, {getInstructorDetails})(TaskDetails);
