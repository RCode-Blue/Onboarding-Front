import React, { Component } from 'react';

import CurrentTemplateTask from './CurrentTemplateTask';

class CurrentTemplateTasks extends Component{
  constructor(props){
    super(props);
    // console.log(this.props.parent.currentTemplate.positions);
    this.state = {
      // positions: this.props.currentTemplate.positions,
      positions: []
    }

    // this.renumberPositions=this.renumberPositions.bind(this);
  }

  static getDerivedStateFromProps(props, state){
    // console.log(props);
    if(props.currentTemplate.positions !== state.positions){
      return{
        positions: props.currentTemplate.positions
      };
    }
    return null;
  }

  // #region : FUNCTIONS

  // Sorts tasks by position_no
  sortPositionsByNumber = (positions) => {
    positions.sort(function(a,b){
      return a.position_no - b.position_no
    })
  }

  // Renumbers other positions when the position_no of position is changed
  renumberPositions = (newPos, pos, prevPos) => {
    let newPositions = [...this.props.currentTemplate.positions];

    if(newPos < 1 || isNaN(newPos) || newPos < prevPos-1 || newPos > prevPos+1){
      return;
    }

    let _newPositions = newPositions.map((position) => {
      if(position.position_no === prevPos){
        position.position_no = newPos;
        return position;
      }

      // Number increase
      if((newPos > prevPos) && (position.position_no === newPos)) {
          position.position_no = newPos-1; }

      // Number decrease
      if((newPos < prevPos) && (position.position_no === newPos)){
          position.position_no = newPos+1; }

      return position;
    });

    this.setState({
      positions: _newPositions
    })

    // const 

  }

  // Rearranges positions so that it's ascending according to position_no
  sortPositions(e){
    let pos = [...this.state.positions];
    pos.sort((a,b) => (a.position_no > b.position_no) ? 1 : -1);
  }


  // #endregion


  // #region : RENDER
  // "SHOW" view
  renderTemplateTasksShow(){
    return this.state.positions.map((position) => {
      // console.log(position.position_no);
      return (
          <div key={position.position_id}
          className="row valign-wrapper green lighten-5"
          style={{
            marginTop:"2px", 
            marginBottom:"2px",
            paddingTop:"8px",
            paddingBottom:"8px"}}>
            <CurrentTemplateTask 
            position={position}
            // renumberPositions={this.props.renumberPositions}
            isAdd={this.props.isAdd}
            isEdit={this.props.isEdit}/>
          </div>
      );
    });
  }

  // "EDIT" view
  renderTemplateTasksEdit(){
    return this.state.positions.map((position) => {
      return (
          <div key={position.position_id}
          className="row valign-wrapper green lighten-5"
          style={{
            marginTop:"2px", 
            marginBottom:"2px",
            paddingTop:"8px",
            paddingBottom:"8px"}}>
            <CurrentTemplateTask 
            position={position}
            renumberPositions={this.renumberPositions}
            isAdd={this.props.isAdd}
            isEdit={this.props.isEdit}/>
          </div>
      );
    });
  }
  
  // "ADD" view
  renderTemplateTasksAdd(){
    // console.log("ADD view")
    return(
      <div>
      </div>
    );
  }

  // #endregion


  render(){
    console.log(this);
    this.sortPositionsByNumber(this.state.positions);
    // console.log("------");

    if(!this.props.isEdit && !this.props.isAdd){
      return(
        <div>
          {this.renderTemplateTasksShow()}
        </div>
      )
    }

    if(this.props.isEdit && !this.props.isAdd){
      return(
        <div>
          {this.renderTemplateTasksEdit()}
        </div>
      )
    }

    if(this.props.isEdit && this.props.isAdd){
      return(
        <div>
          {this.renderTemplateTasksAdd()}
        </div>
      )
    }

    return(
      <div></div>
    )
   
  }

}



export default CurrentTemplateTasks;