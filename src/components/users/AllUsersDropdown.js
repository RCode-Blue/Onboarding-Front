import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllUsers } from '../../actions';
import Select from 'react-select';
// import Axios from 'axios';

class AllUsersDropdown extends Component {

  state = {
    instructorId: null
  }


  componentDidMount(){
    console.log(this.props);
    this.props.getAllUsers();
  }


  handleOnChange(e){
    // console.log(e.value);
    this.setState({ instructorId: e.value});
  }


  renderAllUsers(){
    // console.log(this.props.users.users)

    let userVals = []
    this.props.users.users.map((user) =>
      userVals.push({label:user.given_name + " " + user.family_name, value: user.id})
      )
    // console.log(userVals);
      
    return(
      <div>
        <Select 
        onChange = { e => this.handleOnChange(e)}
          options = {userVals}
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
  console.log(state);
  return{
    users: state.users,
    instructorId: state.instructorId
  }
};

export default connect(mapStateToProps, { getAllUsers } )(AllUsersDropdown)
