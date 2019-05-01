// Used to display instructor details as part of the SetTasks component

import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import { getInstructorDetails } from '../../actions';



class TaskInstructorDetails extends Component {
  constructor(props){
    super(props);
    this.state = { currentInstructor: ''}
  }


  async componentDidMount(){
    await axios.get('/api/user/'+this.props.task.instructor_id).then(
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
          <table>
            <tbody>
              <tr>
                <td>
                  <span style={{"paddingRight": "10px"}}>
                    Instructor: 
                  </span>
                  <span>
                    {this.state.currentInstructor.given_name} {this.state.currentInstructor.family_name}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
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
