import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentTaskInstructorDetails from '../users/InstructorDetailsCurrentTask';
import AllUsersDropdown from '../users/AllUsersDropdown';

import { editTask } from "../../actions";

// import axios from 'axios';

// import { getInstructorDetails } from '../../actions';

class CurrentTask extends Component {
  constructor(props){
    // console.log(props);
    super(props);
  
    // this.instructorDropdownChange = this.instructorDropdownChange.bind(this);

    this.state = {
      isEdit: false,
      instructorId: this.props.task.instructor_id,
      description: props.task.description
    }

    // console.log(this.state);

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }


  async componentDidMount(){
    // console.log(this.props.task.instructor_id);
    // console.log(this.props);
    // if(this.props.task.instructor_id){
      // const res = await axios.get('api/user/'+this.props.task.instructor_id);
      // console.log("getUserDetails");
      // this.props.getInstructorDetails(this.props.task.instructor_id);
    // }
  }

// #region : FUNCTIONS
  handleClick = (thisId) => {
    // console.log(thisId);
  }

  handleFieldChange = (e) => {
    // console.log(e.target.value);
    this.setState({ description: e.target.value });
  }

  handleFormSubmit = () => {
    // console.log("submitted");
    // console.log(this.state);
    // console.log(this.handler);
    // console.log(this.props);
    // console.log(this.state);

    const data = {
      "task_id": this.props.task.id,
      "task_name": this.props.task.task_name,
      "task_description": this.state.description,
      "instructor_id": this.state.instructorId,
      "task_notes": this.props.task.task_notes
    }
    // console.log(data);
    this.props.editTask(data);
    this.toggleEdit();
  }

  toggleEdit = () => {
    // console.log(this.props);
    this.setState({
      isEdit: !this.state.isEdit
    });
  }

  instructorDropdownChange = (instructorId) => {
    console.log(instructorId+1);
  //   console.log(this.state);
  //   console.log(this.props);
    this.setState({
      instructorId: instructorId + 1
    });
  //   // console.log(this.state);
  }
// #endregion

// #region : RENDER
  renderCurrentTaskEdit(task){
    // console.log(this);
    return(
      <div>
        <div className="card-content blue lighten-5 row col s12"
        style={{"marginBottom": "3px"}}>
        <form>
          <table>
            <tbody>
              <tr>
                <td width="350">
                  <input 
                    className="form-control"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleFieldChange} />
                </td>
                <td width="100">
                  <AllUsersDropdown 
                    task={task} 
                    handleDropdownChange={this.instructorDropdownChange}/>
                </td>
                <td width="30">
                  <button
                    type='button'
                    onClick={this.handleFormSubmit}>
                    Submit
                  </button>
                </td>
                <td width="30">
                  <button
                    type='button'
                    onClick={
                      (
                        (e) => this.toggleEdit()
                      )
                    }>
                      Cancel
                    </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        
        </div>
      </div>
    )
  }

  renderCurrentTaskShow(task){
    // console.log(task);
    return(
      <div>
        <div className="card-content green lighten-5 row col s12"
          style={{"marginBottom": "3px"}}>
          <table>
            <tbody>
              <tr>
                <td width="350">
                  {task.description}
                </td>

                <td width="100">
                  <CurrentTaskInstructorDetails instructorId = {this.state.instructorId}/>
                </td>

                <td width="50">
                  <button
                    id = {task.id}
                    type = 'button'
                    onClick={
                      (
                        (e) => this.toggleEdit()
                        // (e) => this.handleClick(task.id)
                      )
                    }>Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
          
          <div>
            
          </div>

        </div>
      </div>
    )
  }

  rendering(){
    return(
      <div>
        Current task rendering...
      </div>
    )
  }
// #endregion

  render(){
    // console.log(this);
    if(!this.props.task){
      return(
        <div>
          <this.rendering/>
        </div>
      )
    }

    if(!this.state.isEdit){
      return(
        <div>
          {this.renderCurrentTaskShow(this.props.task)}
        </div>
      )
    }

    return(
      <div>
        {this.renderCurrentTaskEdit(this.props.task)}
      </div>
    )

  }

}

function mapStateToProps(state){
  // console.log(state);
  return { 
    tasks: state.tasks
  };
}

// export default connect(mapStateToProps)(CurrentTask)
export default connect(mapStateToProps, {editTask})(CurrentTask);