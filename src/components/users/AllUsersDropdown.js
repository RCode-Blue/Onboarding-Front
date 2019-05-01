import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllUsers } from '../../actions';
import Select from 'react-select';
// import Axios from 'axios';

class AllUsersDropdown extends Component {

  componentDidMount(){
    console.log(this.props);
    this.props.getAllUsers();
  }


  renderAllUsers(){
    // console.log(this.props.users.users);

    // let userValues = this.props.users.users.map((user) =>
      // <option key={user.id} value={user.id}>{user.given_name}</option>);
      // return { value: user.id, label: user.given_name });
    // console.log(userValues);

    let userVals = []
    this.props.users.users.map((user) =>
      userVals.push({label:user.given_name + " " + user.family_name, value: user.id})
      )


    // console.log(userVals);
      
    return(
      <div>
        <Select options = {userVals}
          value = {this.props.task.instructor_id}/>
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
