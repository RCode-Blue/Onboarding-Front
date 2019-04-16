import React, { Component } from 'react';
import { connect } from 'react-redux';

import {getInstructorDetails } from '../../actions';

class InstructorDetails extends Component {
  conponentDidMount(){
    this.props.getInstructorDetails(this.props.instructor_id);
  };
}

const SetTask = ({ task }) => {
  const { 
    task_description, 
    task_position, 
    completed, 
    completion_date, 
    task_notes,
    instructor_id } = task;

  return(
    <div className="card-content row green lighten-5">
      <table>
        <tbody>
          <tr>
            <td>
              <span style={{"paddingRight": "10px"}}>
                {task_position} 
              </span>
              <span>
                {task_description}
              </span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <span style={{"paddingRight": "10px"}}>
                Task Notes:
              </span>
              <span>
                {task_notes}
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
                {completed}
              </span>
            </td>
            <td>
              <span style={{"paddingRight": "10px"}}>
                Completion date:
              </span>
              <span>
                {completion_date}
              </span>
            </td>
          </tr>
        </tbody>
      </table>



    </div>
  )
}

function mapStateToProps(state){
  console.log(state);
  return {
    instructor_id: state.instructor_id,
    instructor: state.instructor
  }
}


export default connect( mapStateToProps, {getInstructorDetails})(SetTask);
