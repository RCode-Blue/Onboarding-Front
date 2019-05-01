import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserDetails, getManagerDetails, getBuddyDetails } from '../../actions';
// import Axios from 'axios';


class UserDetails extends Component {
  componentDidMount(){
    // console.log(this.props);
    this.props.getUserDetails(this.props.employee_id);
    this.props.getManagerDetails(this.props.manager_id);
    this.props.getBuddyDetails(this.props.buddy_id);
  };


  render(){
    // console.log(this.props);
    if(!this.props.employee || !this.props.manager || !this.props.buddy){
      return(
        <div>
          <h5>User Details loading...</h5>
        </div>
      );
    }

    return(
      <div>
        <div className="card-content row">
          <table>
            <thead>
              <tr>
                <td>Employee</td>
                <td>Manager</td>
                <td>Buddy</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.employee.given_name} {this.props.employee.family_name}</td>
                <td>{this.props.manager.given_name} {this.props.manager.family_name}</td>
                <td>{this.props.buddy.given_name} {this.props.buddy.family_name}</td>
              </tr>
            </tbody>
          </table>
        
        </div>

      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log(state);
  return {
    employee_id: state.set.set.employee_id,
    manager_id: state.set.set.manager_id,
    buddy_id: state.set.set.buddy_id,
    employee: state.user,
    manager: state.manager,
    buddy: state.buddy
  };
}

export default connect(mapStateToProps, { getUserDetails, getManagerDetails, getBuddyDetails }) (UserDetails);