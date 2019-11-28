import React, {Component} from 'react';
import { connect } from 'react-redux';


import AllUsersDropdown from "../users/AllUsersDropdown";
import { postNewTask } from "../../actions";



class NewTask extends Component {
  constructor(props){
    super(props);

    // console.log(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    // this.onClick = this.onClick.bind(this);
    // console.log(this.toggleEdit);
    this.state={
      isEdit: false,
      instructorId: null,
      taskDescription: "",
      task: {
        id: null,
        completed: null, 
        completion_date: null,
        checked_off_by: null,
        description: null,
        instructor_id: null,
        task_name: null,
        task_notes: null
      }
    }
  }

  componentDidMount(){
    // console.log(this.toggleEdit);
    // console.log(this);
    
  }

// FUNCTIONS
// #region
  instructorDropdownChange = (instructorId) => {
    this.setState({
      instructorId: instructorId + 1
    });
    // console.log(this.state);
  }

  handleFieldChange = (e) => {
    // console.log(e.target.value);
    this.setState({ taskDescription: e.target.value });
  }

  handleFormSubmit = () => {
    // console.log(this.props);
    // console.log(this.state);

    let data = {
      "task_name" : this.state.task.task_name,
      "task_description": this.state.taskDescription,
      "instructor_id": this.state.instructorId,
      "Task_notes": this.state.task.task_notes
    }

    // console.log(data)
    this.props.postNewTask(data);
    this.toggleEdit();
  }

  handleFormCancel = () => {
    this.setState(
      {isEdit: false}
    )
  }

  toggleEdit = () => {
    // console.log("-");
    this.setState({
      isEdit: !this.state.isEdit
    });
  }
// #endregion

// RENDER
// #region
  renderCreateNewTask(){
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
                      value={this.state.taskDescription}
                      onChange={this.handleFieldChange} />
                  </td>
                  <td width="100">
                    <AllUsersDropdown
                      task={this.state.task}
                      handleDropdownChange={this.instructorDropdownChange}/>
                  </td>
                  <td width="30">
                    <button
                      type="button"
                      onClick={this.handleFormSubmit}>
                      Submit
                    </button>
                  </td>
                  <td width="30">
                    <button
                      type="button"
                      onClick={this.handleFormCancel}>
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
  
  renderInitialView(){
    return(
      <div>
        <div className="card-content blue lighten-5 row col s12"
        style={{"marginBottom": "3px"}}>
          <table>
            <tbody>
              <tr>
                <td width="350"></td>
                <td width="100"></td>
                <td width="30"></td>
                <td width="30">
                  <button
                  type='button'
                  onClick={this.toggleEdit }>
                    New
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
// #endregion

  render(){
    if (!this.state.isEdit){
      return(
        <div>
          {this.renderInitialView()}
        </div>
      )
    }
    return(
      <div>
        {this.renderCreateNewTask()}
      </div>
    )
  }
}

export default connect(null, {postNewTask})(NewTask);