import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTemplates, getTemplatePositions, postNewTemplate } from '../../actions';
// import AllUsersDropdown from "../users/AllUsersDropdown";
import Template from "./Template";
// import MaterialIcon, {colorPalette} from 'material-icons-react';
// import MaterialIcon from 'material-icons-react';

import "../../commonStyles.css";
import "../templates/template.css";

// import {uuid4} from "../../functions/sharedFunctions"

class TemplateList extends Component {   
  constructor(props){
    super(props);

    this.toggleCreateNew = this.toggleCreateNew.bind(this);

    this.state={
      createNew: false,
      templateTitle: "",
      templateDescription: ""
    }
  }

  componentDidMount(){
    // console.log(this);
    this.props.getTemplates();
    // console.log(uuid4())
  }


// #region : FUNCTIONS
  toggleCreateNew = () => {
    this.setState(
      {createNew: !this.state.createNew}
    )
  }
  
  handleFormSubmit = () => {
    const data = {
      template_name: this.state.templateTitle,
      description: this.state.templateDescription
    }
    // console.log(data);
    // console.log(this);
    this.props.postNewTemplate(data);
    this.toggleCreateNew();
    // console.log("----- Posted -----");
  }

  handleTitleFieldChange = (e) => {
    this.setState({
      templateTitle: e.target.value
    });
  }

  handleDescriptionFieldChange = (e) => {
    this.setState({
      templateDescription: e.target.value
    });
  }

// #endregion

// #region : RENDER
  templatesHeader(){
    // console.log(this);
    return(
      <div className="card-content">
        <div className="
        row black-text valign-wrapper brown lighten-4"
          style={{}}>
          <div className="col s10">
            <h5>
              Templates List
            </h5>
          </div>
          <div className="col s2 center-align custom-add-button">
            
          {/*}
            <MaterialIcon icon="add_circle_outline small"
            className="material-icons add"
            onClick = {this.toggleCreateNew}>
            </MaterialIcon>
            <span className="custom-templates-add__hovertext">Create new</span>
          */}

            <button type="button"
            className="btn-small grey darken-1"
            onClick={this.toggleCreateNew}>
            New
            </button>

          </div>
        </div>
      </div>
    )
  }

  renderCreateTemplate(){
    console.log(this.state.templateTitle);
    return(
      <div className="card-content" style={{marginBottom: "5px", marginTop: "5px"}}>
        <form>
          <div className="row black-text valign-wrapper brown lighten-4"
          style={{marginBottom: "0px"}}>
            <div className="col s2 center-align">
              Title *
            </div>
            <div className="col s7 center-align">
              <input type="text"
              value={this.state.templateTitle}
              onChange={this.handleTitleFieldChange}
              />
            </div>
            <div className="col s1 center-align"></div>
            <div className="col s2">
              <button
              type="button"
              className = "btn-small grey darken-1"
              onClick={this.handleFormSubmit}
              disabled={!this.state.templateTitle}>
                submit  
              </button>
            </div>
          </div>

          <div className="row black-text valign-wrapper brown lighten-4"
          style={{marginTop: "0px"}}>
            <div className="col s2 center-align">
              Description
            </div>
            <div className="col s7 center-align">
              <input type="text"
              value={this.state.templateDescription}
              onChange={this.handleDescriptionFieldChange}/>
            </div>
            <div className="col s1 center-align"></div>
            <div className="col s2">
              <button
              type="button"
              onClick = {this.toggleCreateNew}
              className = "btn-small grey darken-1">
                cancel  
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  renderTemplates(){
    // console.log(this.props.templates);
    const cities = [
      {id: 0, value:"Sydney", label:"Sydney"},
      {id: 1, value:"Brisbane", label:"Brisbane"},
      {id: 2, value:"Melbourne", label:"Melbourne"},
      {id: 3, value:"Adelaide", label:"Adelaide"},
      {id: 4, value:"Perth", label:"Perth"},
      {id: 5, value:"Darwin", label:"Darwin"},
      {id: 6, value:"Hobart", label:"Hobart"}
    ]

    return this.props.templates.map(template => {
      // console.log(template);
      return(
        <div key={template.id}>
          <Template template={template} cities={cities}/>
        </div>
      );

    });
  }

// #endregion

  render() {
    // console.log(this)
    if(this.state.createNew === false){
      return (
        <div>
          {this.templatesHeader()}
          {this.renderTemplates()}
        </div>
      );
    }
    return (
      <div>
        {this.renderCreateTemplate()}
        {this.renderTemplates()}
      </div>
    );
  }
}


function mapStateToProps(state){
  // console.log({templates});
  return { templates: state.templates };
}


export default connect(mapStateToProps, { getTemplates, getTemplatePositions, postNewTemplate })(TemplateList);

