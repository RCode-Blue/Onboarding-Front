import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import { getInstructorDetails } from "../../../actions/index";


class CurrentTaskInstructor extends Component {
  constructor(props){
    super(props);
    this.state = {
      instructor: null
    }
  }

  async componentDidMount(){
    // console.log(id)
    const res = await axios.get(`https://onb0ardingapp.azurewebsites.net/api/user/+${this.props.id}`)
    // const res = await axios.get(`https://onb0arding.azurewebsites.net/api/user/+${this.props.id}`)
    this.setState({
      instructor: res.data.given_name + " " + res.data.family_name
    })
  }

  render(){
    // console.log(this);
    if(!this.state.instructor){
      return(
        <div>loading...</div>
      )
    }
    return(
      <div>
        {this.state.instructor} 
        {/* {this.state.instructor.family_name} */}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    instructor: state.instructor
  }
}

export default connect(mapStateToProps, { getInstructorDetails })(CurrentTaskInstructor);
