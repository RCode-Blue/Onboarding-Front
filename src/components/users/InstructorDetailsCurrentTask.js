import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

// import { getInstructorDetails } from '../../actions';


class CurrentTaskInstructorDetails extends Component {
  constructor(props){
    super(props);
    this.state = { 
      instructor: ''}
  }

  async componentDidMount(){
    // console.log(this.props);
    if(this.props.instructorId){
      await axios.get('/api/user/'+this.props.instructorId).then(
      // await axios.get('https://onb0ardingapp.azurewebsites.net/api/user/'+this.props.instructorId).then(
      // await axios.get('http://localhost:5000/api/user/'+this.props.instructorId).then(
        res => {
          // console.log(res.data)
          this.setState({
            instructor: res.data })
        }
        
      );
      // console.log(this.state)
    }
  }



  renderInstructorDetails(instructor){
    // console.log(instructor);
    return(
      <div>
        {instructor.given_name} {instructor.family_name}
      </div>
    )
  }


  renderNoDetails(){
    // console.log(this.state);
    return(
      <div></div>
    )
  }


  render(){
    // console.log(this.props);
    // console.log(this.state.instructor);
    if(!this.state.instructor.id){
      return(
        <div>
          <this.renderNoDetails/>
        </div>

      )
    }
    return(
      <div>
        {this.renderInstructorDetails(this.state.instructor)}
      </div>
    )
  }

}

function mapStateToProps(state){
  // console.log(state);
  return{
    instructor: state.instructor
    // currentTaskInstructor: state.instructor
  }
}



export default connect(mapStateToProps)(CurrentTaskInstructorDetails);