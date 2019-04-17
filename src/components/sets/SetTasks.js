import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {getInstructorDetails } from '../../actions';

import TaskInstructorDetails from '../users/InstructorDetails';

class TaskDetails extends Component {
  async componentDidMount(){
    // console.log(this.props);
    // console.log("componentDidMount");


    // this.props.getInstructorDetails(this.props.task.instructor_id);
    
  };

  


  renderTaskDescription(){
    return(
      <div>
        <div className="card-content row green lighten-5">
          <table>
            <tbody>
              <tr>
                <td>
                  <span style={{"paddingRight": "10px"}}>
                    {this.props.task.task_position} 
                  </span>
                  <span>
                    {this.props.task.task_description}
                  </span>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }


  renderTaskInstructor(){
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <span style={{"paddingRight": "10px"}}>
                  Instructor:
                </span>
                <span>
                    {this.props.instructor.given_name} {this.props.instructor.family_name}
                </span>
              </td>
              <td></td>
            </tr>

          </tbody>
        </table>
      </div>
    )
  }


  renderTaskDetails(){
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <span style={{"paddingRight": "10px"}}>
                  Notes:
                </span>
                <span>
                  {this.props.task.task_notes}
                </span>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span style={{"paddingRight": "10px"}}>
                  Completed:
                </span>
                <span>
                  {this.props.task.completed}
                </span>
              </td>
              <td>
                <span style={{"paddingRight": "10px"}}>
                  Completion date:
                </span>
                <span>
                  {this.props.task.completion_date}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }


  render(){
    // console.log(this.props);
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
        {this.renderTaskDetails()}
      </div>
      );


  }

}





function mapStateToProps(state){
  // console.log(state);
  return {
    // instructor_id: state.instructor_id,
    // instructor: state.instructor
  }
}


export default connect( mapStateToProps, {getInstructorDetails})(TaskDetails);
