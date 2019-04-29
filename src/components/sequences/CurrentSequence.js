import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSet, 
  getUserDetails,
  getManagerDetails,
  getBuddyDetails } from '../../actions';

import SetHeader from '../sets/SetHeader';
import UserDetails from '../users/UserDetails';
import TaskDetails from '../sets/SetTasks';


class CurrentSequence extends Component {
  componentDidMount(){
    // console.log(this.props);
    this.props.getSet(this.props.match.params.id);
  }


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
    // console.log(this.props);
    return this.props.set.tasks.map(task =>{
      // console.log(taskInfo.instructor_id);
      return(
        <TaskDetails key={task.id} task = {task} />);
    });
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