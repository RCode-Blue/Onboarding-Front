import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getInstructorDetails } from '../../actions';



class TaskInstructorDetails extends Component {
  componentDidMount(){
    // console.log(this.props.task.instructor_id);
    this.props.getInstructorDetails(this.props.task.instructor_id);
  }



  render(){
    console.log(this.props.instructor)
    if(!this.props.instructor){
    return(
      <div>
        <i>Instructor Details loading...</i>
      </div>
    );}
    return(
      <div>
        {this.props.instructor.given_name}
      </div>
    )
  }
}


function mapStateToProps(state){
  // console.log(state.instructor);
  return {
    instructor: state.instructor
  };
}


export default connect(mapStateToProps, { getInstructorDetails })(TaskInstructorDetails);
