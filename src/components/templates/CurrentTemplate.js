import React, { Component } from 'react';
import { connect } from 'react-redux';

import editTemplate  from './EditTemplate';
import TemplateHeader from "./header/TemplateHeader";
import CurrentTemplateTasks from "./tasks/CurrentTemplateTasks";
import CurrentUnallocatedTasks from "./tasks/CurrentUnallocatedTasks";

import { getTemplatePositions, getUnallocatedTasks, editTask } from '../../actions';

import axios from 'axios';

// Displays a template complete with all the tasks associated with it
// endpoint: /templates/#/tasks
class TemplateTasks extends Component {
  constructor(props){
    super(props)
    // console.log(this);
    // console.log(this.props);

    this.state={
      isEdit: false,
      isAdd: false,
      allocatedTaskIds: [],
      selectedTasks: [],
      // positions: [],
      currentTemplate: null
    }
  }

  static getDerivedStateFromProps(props, state){
    if(props.currentTemplate !== state.currentTemplate){
      return{
        currentTemplate: props.currentTemplate
      };
    }
    return null;
  }

  componentDidMount(){
    this.props.getTemplatePositions(this.props.match.params.id);
  }

  // #region : FUNCTIONS
  toggleIsEdit = () => {
    this.setState(
      { isEdit: !this.state.isEdit }
    );
  }

  toggleIsAdd = () => {
    this.setState(
      { isAdd: !this.state.isAdd }
    )
  }

  handleEditButtonClick = () => {
    // console.log(this);
    this.toggleIsEdit();

    this.props.currentTemplate.positions.forEach(position => {
      this.state.allocatedTaskIds.push(position.task_id)
    });

    this.state.currentTemplate.positions.forEach(position => {
      position.prev_position_no = parseInt(position.position_no);
    })
  }

  handleAddButtonClick = async() => {
    this.toggleIsAdd();
    
    let allocatedIds = "";
    this.state.allocatedTaskIds.map(
      id => allocatedIds += id + ","
    )
    allocatedIds = allocatedIds.substring(0, allocatedIds.length - 1);

    await this.props.getUnallocatedTasks(allocatedIds);
  }

  handleTasksSubmitButtonClick = () => {
    // Submit button for after rearranging sequence numbers for assigned tasks (not new ones)
    console.log(this);

    // let positionsPayload = {};
    // positionsPayload.positions=[];

    // this.state.currentTemplate.positions.forEach(position => {
    //   positionsPayload.positions.push(position);
    // })

    // axios.put("/api/positions", positionsPayload);

  }

  // handleNewTasksSubmitButtonClick = async () => {
  handleNewTasksSubmitButtonClick = () => {
    // Submit button for adding new tasks to a template
    // let positions = [];
    let positionNos = [];
    this.state.currentTemplate.positions.map(
      (position) => {
        // console.log(position.position_no);
        positionNos.push(parseInt(position.position_no));
        return(position);
      }
    )

    // console.log(positionNos);
    // console.log(this);

    let maxPos = Math.max(...positionNos);
    // console.log(maxPos);

    this.state.selectedTasks.map(
      async (task) => {
        maxPos++;

        let data = {
          "template_id": this.state.currentTemplate.template_id,
          "task_id": task,
          "position_no": maxPos
        }
        console.log(data);
        // return(data);

        let res = await axios.post("https://onb0ardingapp.azurewebsites.net/api/position", data);
        // let res = await axios.post("/api/position", data);
        console.log(res);
      }
    )

    

    
    // await Promise.all(
      // this.state.selectedTasks.map(
      //   (task) => {
      //     async(task) => {
      //     maxPos++;
      //     let data = {
      //       "template_id": this.state.currentTemplate.template_id,
      //       "task_id": task,
      //       "position_no": maxPos
      //     }
      //     console.log(data);

          // return(data);
          // let result = await axios.post("/api/position", data);
          // console.log(result);
        // }
      // )
    // )
    // return(positions);

  }

  handleCheckboxTick = (id) => {
    let selectedTasks = [...this.state.selectedTasks];

    // console.log(selectedTasks.includes(id));

    // task already selected
    if(selectedTasks.includes(id)){
      let index = selectedTasks.indexOf(id);
      if (index > -1){
        selectedTasks.splice(index,1);
      }

      console.log(`Task id ${id} was unticked`);
    }

    // task not selected
    else{
      // console.log("ticked");
      selectedTasks.push(id);

      console.log(`Task id ${id} was added`);
    }

    this.setState(
      {selectedTasks: selectedTasks}
    )
  }

  // Renumbers other positions when the position_no of position is changed

  // #region  commented out
  // renumberPositions = (newPos, pos, prevPos) => {
  //   let newPositions = [...this.props.currentTemplate.positions];

  //   if(newPos < 1){ return; }

  //   newPositions.map((position) => {
  //     if(position.position_no === prevPos){
  //       position.position_no = newPos;
  //       return position;
  //     }

  //     // Number increase
  //     if((newPos > prevPos) && (position.position_no === newPos)) {
  //         position.position_no = newPos-1; }

  //     // Number decrease
  //     if((newPos < prevPos) && (position.position_no === newPos)){
  //         position.position_no = newPos+1; }

  //     return position;
  //   });

  // }
  // #endregion

  // #endregion


  render(){
    console.log(this);
    const {currentTemplate} = this.props;

    if (!currentTemplate.positions){
      // console.log("loading");
      return(
        <div>Loading...</div>
      );
    }

    return(
      <div>
        <div>
          <TemplateHeader 
          {...this.state} 
          parent={this.props} 
          handleEditButtonClick={this.handleEditButtonClick}
          handleAddButtonClick={this.handleAddButtonClick}
          handleTasksSubmitButtonClick={this.handleTasksSubmitButtonClick}
          handleNewTasksSubmitButtonClick={this.handleNewTasksSubmitButtonClick}
          toggleIsEdit={this.toggleIsEdit}
          toggleIsAdd={this.toggleIsAdd}
          currentTemplate={this.state.currentTemplate}/>
        </div>
        <div>
          <CurrentUnallocatedTasks
          {...this.state}
          parent={this.props}
          // selectedTasks={this.state.selectedTasks}
          handleCheckboxTick={this.handleCheckboxTick}/>
        </div>
        <div>
          <CurrentTemplateTasks
          isEdit={this.state.isEdit}
          isAdd={this.state.isAdd}
          // renumberPositions={this.renumberPositions}
          currentTemplate={this.state.currentTemplate}
          />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  // console.log(state);
  return { 
    currentTemplate: state.currentTemplate, 
    unallocatedTasks: state.unallocated_tasks
  };
}

export default connect(mapStateToProps, { getTemplatePositions, editTemplate, getUnallocatedTasks, editTask })(TemplateTasks);




// #region : Notes:
/*
===============================
Initial view: ("SHOW" view)
===============================
isEdit               = false
isAdd                = false
------------------------------

Header          - Has "edit" button => click > isEdit = true


Allocated tasks - nothing else







========================================
Pressed "edit" on header: ("EDIT" view)
========================================
isEdit               = true
isAdd                = false
-----------------------------------------

Header          - "add" button    => click > isDisplayUnallocated = true
                - "submit" button => click > submits new sequence to backend
                                           > isEdit = false
                - "cancel" button => click > isEdit = false


Allocated tasks - Has "remove" button
                - Can change sequence number








======================================
Pressed "add" on header: ("ADD" view)
======================================
isEdit               = true
isAdd                = true
---------------------------------------

Header            - "cancel" button => click > isDisplayUnallocated = false 
                  - "submit" button => click > isDisplayUnallocated = false
                                             > sends POST to backend
                                             > back to "EDIT" view, with new tasks listed


Unallocated tasks - List of tasks
                  - Each task had "add" checkbox

Allocated tasks   - nothing else (display only, no input)
*/
// #endregion