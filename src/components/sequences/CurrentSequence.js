import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSet, 
  getUserDetails,
  getManagerDetails,
  getBuddyDetails } from '../../actions';

import SetHeader from '../sets/SetHeader';
import SetTask from '../sets/SetTasks';
import UserDetails from '../users/UserDetails';


class CurrentSequence extends Component {
  componentDidMount(){
    // console.log(this.props);
    // console.log(this.props);
    this.props.getSet(this.props.match.params.id);


    // this.props.getUserDetails(this.props.set.set.employee_id);
    // this.props.getManagerDetails(this.props.set.set.manager_id);
    // this.props.getBuddyDetails(this.props.set.set.buddy_id);
  }

  // componentDidUpdate(){
  //   // console.log(this.props);
  //   this.props.getUserDetails(this.props.set.set.employee_id);
  //   this.props.getManagerDetails(this.props.set.set.manager_id);
  //   this.props.getBuddyDetails(this.props.set.set.buddy_id);
  //   console.log(this.props)
  // }


  renderUserDetails() {
    // console.log(this.props);
      return(
        <div>
          <UserDetails/>
        </div>
      );
 
  }

  renderSetHeader() {
    // console.log(this.props);
    return <SetHeader set={this.props.set.set}/>
  }

  renderSetTasks(){
    console.log(this.props);
    return this.props.set.tasks.map(taskInfo =>
      <SetTask key={taskInfo.id} task = {taskInfo} />
      )
  }


  render(){
    // console.log(this.props);
    if(!this.props.set){
      return(
        <div>
          Loading...
        </div>
      );
    }
    // console.log(this.props);
    return(
      <div>
      {this.renderSetHeader()}
      {this.renderUserDetails()}
      {this.renderSetTasks()}
      </div>
    )
  }
}


function mapStateToProps(state){
  // console.log(state);
  // console.log(state.set);
  
    return {
    set: state.set,
    tasks: state.tasks
  }


}

export default connect( mapStateToProps, { 
  getSet, 
  getUserDetails, 
  getManagerDetails,
  getBuddyDetails })(CurrentSequence);
// export default CurrentSequence;