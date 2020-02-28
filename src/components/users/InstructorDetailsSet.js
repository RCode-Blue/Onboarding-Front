// Used to display instructor details as part of the SetTasks component

import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import { getInstructorDetails } from '../../actions';



class TaskInstructorDetails extends Component {
  constructor(props){
    super(props);
    // console.log(props);
    this.state = { currentInstructor: ''}
  }


  async componentDidMount(){
    // await axios.get('/api/user/'+this.props.task.instructor_id).then(
    await axios.get('https://onb0ardingapp.azurewebsites.net/api/user/'+this.props.task.instructor_id).then(
      res => {
        this.setState({currentInstructor: res.data})
      }
    )
    // console.log(this.state.currentInstructor);
  }
  

  render(){
    // console.log(this.state);
    if(this.state.currentInstructor === ""){
      return(
        <div>
          <i>Instructor Details loading...</i>
        </div>
      );}
      return(
        <div>
          <div className="row valign-wrapper" style={{"height": "10px"}}>
            <div className="col s2" style={{"paddingRight": "5px"}}>
              Instructor:
            </div>
            <div className="col s10" style={{"paddingRight": "5px"}}>
            {this.state.currentInstructor.given_name} {this.state.currentInstructor.family_name}
            </div>
          </div>
        </div>
      )
  }
}


function mapStateToProps(state){
  // console.log(state);
  return {
    // instructor: state.instructor
  };
}


export default connect(mapStateToProps, { getInstructorDetails })(TaskInstructorDetails);
