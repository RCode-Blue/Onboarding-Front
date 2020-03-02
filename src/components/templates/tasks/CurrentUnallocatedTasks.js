import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getInstructorDetails } from "../../../actions/index";

import CurrentTaskInstructor from "./CurrentTaskInstructor";

class CurrentUnallocatedTasks extends Component{
  constructor(props){
    super(props);
    this.state = {
      unallocated: null,
      instructorGivenName: "",
      instructorFamilyName: ""
    }
  }


  async componentDidMount(){
    let allocatedIds = "";
    this.props.allocatedTaskIds.map(
      // id => console.log(id)
      id => allocatedIds += id + ","
    )

    allocatedIds = allocatedIds.substring(0, allocatedIds.length - 1);

    if(this.props.isEdit && this.props.isAdd){
      await this.props.getUnallocatedTasks(allocatedIds);
    }
  }

  
  // #region : FUNCTIONS
  getInstructorDetails = async(id) => {
    // console.log(id);
    // console.log(this.props.instructor.given_name + " " + this.props.instructor.family_name)
    let instructor = await axios.get('/api/user/'+id)
    // let instructor = await axios.get('https://onb0ardingapp.azurewebsites.net/api/user/'+id)
    // let instructor = await axios.get('http://localhost:5000/api/user/'+id)
    
    console.log(instructor);


    return (
      <div>
        {this.instructor.given_name} + " " + {this.instructor.family_name}
      </div>
      );
  }



  // #endregion


  // #region : RENDER
  renderUnallocatedTasksShow = () => {
    // console.log(this);
    return(
      <div>
      </div>
    )
  }
  
  // ADD view
  renderUnallocatedTasksAdd = () => {
    return this.props.parent.unallocatedTasks.unallocated_tasks.map(
      (task) => {
        // console.log(task.id);
        return(
          <div key={task.id}
          className="row valign-wrapper green lighten-5"
          style={{
            marginTop:"2px", 
            marginBottom:"2px",
            paddingTop:"8px",
            paddingBottom:"8px"}}>
            <div className="col s8">
              {task.description}
            </div>
            <div className="col s3">
              
              {/* {this.renderInstructorName(task.instructor_id)} */}
              <CurrentTaskInstructor id={task.instructor_id} />
             
              {/* {task.instructor_id}  */}
            </div>
            <div className="col s1">
              <label>
                <input
                type="checkbox"
                defaultChecked={false}
                onChange={this.props.handleCheckboxTick.bind(null, task.id)}/>
                <span></span>
              </label>
            </div>
          </div>  
        )
      }
    )
    
  }

  // loading view
  renderLoading = () => {
    return(
      <div></div>
    )
  }
  // #endregion

  render(){
    console.log(this);
    // loading view
    if(!this.props.parent.unallocatedTasks){
      return(
        <div>
          {this.renderLoading()}
        </div>
      )
    }

    // SHOW view
    if(!this.props.isEdit && !this.props.isAdd){
      return(
        <div>
          {this.renderUnallocatedTasksShow()}
        </div>
      )
    }

    // EDIT view
    if(this.props.isEdit && !this.props.isAdd){
      return(
        <div>
        </div>
      )
    }

    // ADD view
    if(this.props.isEdit && this.props.isAdd){
      return(
        <div>
          {this.renderUnallocatedTasksAdd()}
        </div>
      )
    }

    return(
      <div>
      </div>
    )
  }

}

function mapStateToProps(state){
  return{
    instructor: state.instructor
  }
}

export default connect(mapStateToProps, { getInstructorDetails })(CurrentUnallocatedTasks)