import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeSetTask } from "../../actions";



class CurrentSetTaskDetails extends Component{
  constructor(props){
    super(props);
    // console.log(props);
    // 
    this.state = {
      isEdit: false,
      task: this.props.task,
      isComplete: this.props.task.completed,
      completionDate: this.props.task.completion_date
    }
  }
 
  handleIsTaskDoneClick = () => {
    let taskCopy = JSON.parse(JSON.stringify(this.state.task));
    this.setState({
      isEdit: !this.state.isEdit
    });

    if(this.state.isComplete === null | this.state.isComplete === false)
    {
      this.setState({
        isComplete: true
      });
      taskCopy["completed"] = !taskCopy["completed"];
      this.setState({
        task: taskCopy
      })
    }
    
    else{
      this.setState({
        isComplete: false
      });
      taskCopy["completed"] = !taskCopy["completed"];
      this.setState({
        task: taskCopy
      })
    }
    
    // console.log(this.state);
    
  }
  
  handleFormSubmit = () => {
    // console.log(this.state.task);
    let data = {
      "user_task_id": this.state.task.id,
      "set_id": this.state.task.set_id,
      "task_description": this.state.task.task_description,
      "task_position": this.state.task.task_position,
      "completed": this.state.task.completed,
      "completion_date": this.state.task.completion_date,
      "instructor_id": this.state.task.instructor_id,
      "task_notes": this.state.task.task_notes
    }
    // console.log(data)

    
    this.props.changeSetTask(data);
    // this.props.changeSetTask(this.state.task);
    this.setState({
      isEdit: !this.state.isEdit
    });
    // console.log(this.state.task);
  }


  renderCurrentSetTaskShow(task){
    // console.log(this.state)
    return(
      <div>
        <div className="row valign-wrapper" style={{"marginBottom": "10px"}}>
          <div className="col s1" style = {{"paddingRight": "5px"}}>
            Notes:
          </div>
          <div className="col s11" style = {{"paddingRight": "5px"}}>
            {task.task_notes}
          </div>
        </div>
        <div className="row valign-wrapper" style={{"marginBottom": "10px"}}>
          <div className="col s2" style = {{"paddingRight": "5px"}}>
            Completed:
          </div>

          <div className="col s1">
            <form>
              *
              <input 
                type="checkbox"
                id = "chkid"
                />
              *
            </form>
          </div>

          <div className="col s1" style = {{"paddingRight": "5px"}}>
            <div onClick={this.handleIsTaskDoneClick} style = {{"cursor": "pointer"}}>
              {this.state.isComplete? "YES":"NO"}
            </div>
          </div>
          
          <div className="col s4" style = {{"paddingRight": "5px"}}>
            {task.completed}
          </div>
          <div className="col s2" style = {{"paddingRight": "5px"}}>
            Completion date:
          </div>
          <div className="col s4" style = {{"paddingRight": "5px"}}>
            {task.completion_date}
          </div>
        </div>

      </div>
    )
  }

  renderCurrentSetTaskEdit(task){
    // console.log(this.state)
    return(
      <div>
        {this.renderCurrentSetTaskShow(task)}
        <div>
          <button
            id = {task.id}
            type="button"
            onClick = {this.handleFormSubmit}>
          Submit  
          </button>
        </div>
      </div>
    );
  }

  render(){
    // console.log(this.state);
    if(this.state.isEdit){
      return(
        <div>
          {this.renderCurrentSetTaskEdit(this.props.task)}
        </div>
      );
    }
    
    return(
      <div>
        {this.renderCurrentSetTaskShow(this.props.task)}
      </div>
    )
  }
}


function mapStateToProps(state){
  // console.log(state);
  return{};
}


// export default connect( mapStateToProps, { getInstructorDetails }, CurrentSetTaskDetails)
export default connect(mapStateToProps, {changeSetTask}) (CurrentSetTaskDetails);
