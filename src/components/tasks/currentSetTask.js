import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeSetTask } from "../../actions";

import moment from 'moment';

// import { formatDate } from "../../functions/sharedFunctions";


class CurrentSetTaskDetails extends Component{
  constructor(props){
    super(props);
    // console.log(this);
    // 
    this.state = {
      isEdit: false,
      task: this.props.task,
      isComplete: this.props.task.completed,
      completionDate: this.props.task.completion_date
    }

    // this.formatDate = formatDate.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
 
  formatDate = (date) => {
    if(moment(date).isValid()){
      return moment(this.state.completionDate).format("YYYY, MM, DD")
    }
    return null;
  }

  handleIsTaskDoneClick = () => {
    let taskCopy = JSON.parse(JSON.stringify(this.state.task));
    // console.log(taskCopy);
    this.setState({
      isEdit: !this.state.isEdit
    });

    // console.log(this);
    
    if(this.state.isComplete === null | this.state.isComplete === false)
    {
      // console.log("Not complete section");
      this.setState({
        isComplete: true,
        completionDate: new Date()
      });
      // console.log(this.state);
    }
    
    else{
      // console.log("Complete section");
      this.setState({
        isComplete: false,
        completionDate: null
      });
    }
   
    taskCopy["completed"] = !taskCopy["completed"];
    taskCopy["completion_date"] = this.state.completionDate;

    this.setState({
      task: taskCopy
    })



    // console.log(this);
    // console.log(this.state);
    // console.log(this.state.completionDate);
    // console.log(taskCopy["completion_date"]);
    // console.log(taskCopy["completed"]);
    // console.log(moment(this.state.completionDate).format('YYYY MM DD'))
    // console.log(moment(this.state.completionDate).format('LL'))
  }
  
  handleFormSubmit = () => {
    console.log(this);
    // this.formatDate = formatDate.bind(this);

    let formattedDate = this.formatDate(this.state.completionDate);
    console.log(formattedDate);

    // Note: PostgreSQL takes date in the form: "YYYY, MM, DD"
    const data = {
      "user_task_id": this.state.task.id,
      "set_id": this.state.task.set_id,
      "task_description": this.state.task.task_description,
      "task_position": this.state.task.task_position,
      "completed": this.state.isComplete,
      // "completion_date": moment(this.state.completionDate).format("YYYY, M, D"),
      "completion_date_year": parseInt(moment(this.state.completionDate).format("YYYY")),
      "completion_date_month": parseInt(moment(this.state.completionDate).format("M")),
      "completion_date_date": parseInt(moment(this.state.completionDate).format("D")),
      "instructor_id": this.state.task.instructor_id,
      "task_notes": this.state.task.task_notes
    }
    console.log(data);
    // console.log(this);

    
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
        {/* Task Notes */}
        <div className="row valign-wrapper" style={{"marginBottom": "10px"}}>
          <div className="col s2" style = {{"paddingRight": "5px"}}>
            Notes:
          </div>
          <div className="col s10" style = {{"paddingRight": "5px"}}>
            {task.task_notes}
          </div>
        </div>
        
        {/* Completed, Completion Date */}
        <div className="row valign-wrapper" style={{"marginBottom": "10px"}}>
          <div className="col s2" style = {{"paddingRight": "5px"}}>
            Completed:
          </div>

          <div className="col s3">
              <label>
              <input 
                type="checkbox"
                onChange={this.handleIsTaskDoneClick}
                checked={this.state.isComplete}
                />
                <span></span>
              </label>
              <span>
                {this.state.isComplete? "YES":"NO"}
              </span>
          </div>
          
          <div className="col s1" style = {{"paddingRight": "5px"}}>
          
          </div>

          <div className="col s2" style = {{"paddingRight": "5px"}}>
            Completion date:
          </div>
          <div className="col s4" style = {{"paddingRight": "5px"}}>
            { moment(this.state.completionDate).isValid()? 
              moment(this.state.completionDate).format('LL'):null }
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
