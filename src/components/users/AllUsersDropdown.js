import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllUsers } from '../../actions';
import Select from 'react-select';
// import Axios from 'axios';

class AllUsersDropdown extends Component {

  state = {
    dropdownId: this.props.task.instructor_id-1
  }


  componentDidMount(){
    // console.log(this.props);
    // console.log(this.state);
    this.props.getAllUsers();
  }


  handleOnChange(e){
    // console.log(e);
    // console.log(this.props.users);
    // console.log(this.props.task.instructor_id);
    // console.log(this.props.users.users[e.value-1])
    this.setState({ dropdownId: e.value-1});
    this.props.handleDropdownChange(e.value-1);
    // console.log(this.state);
  }


  renderAllUsers(){
    // console.log(this.props.users.users)
    // console.log(this.state);

    let userVals = []
    this.props.users.users.map((user) =>
      userVals.push({label:user.given_name + " " + user.family_name, value: user.id})
      )
    // console.log(userVals);
    // console.log(this.state.instructorId);
    return(
      <div>
        <Select 
          onChange = { e => this.handleOnChange(e)}
          options = {userVals}
          value = {userVals[this.state.dropdownId]}
          />
      </div>
    )
    

  }



  render(){
    // console.log(this.props.users);
    if(!this.props.users){
      return(
        <div><i>Loading...</i></div>
      )
    }

    return(
      <div>
        
      {this.renderAllUsers()}
        
      </div>
    )
  }

}  

function mapStateToProps(state){
  // console.log(state);
  return{
    users: state.users
  }
};

export default connect(mapStateToProps, { getAllUsers } )(AllUsersDropdown)
