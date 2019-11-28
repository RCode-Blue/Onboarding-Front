import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import { postNewSet, postNewSequence } from '../../actions';

import AllUsersDropdown from "../users/AllUsersDropdown";
import moment from 'moment';
// import axios from 'axios';

// import { parseISO, format } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

// Displays a template title and description, child of Templates component
class Template extends Component {
  constructor(props){
    super(props);

    // console.log(this);

    this.state={
      isEdit: false,
      employeeId: null,
      managerId: null,
      buddyId: null,
      citiesDropdownIndex: 0,
      city: this.props.cities[0].value,
      startDate: new Date()
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAssignButtonClick = this.handleAssignButtonClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.employeeDropdownChange = this.employeeDropdownChange.bind(this);
    this.managerDropdownChange = this.managerDropdownChange.bind(this);
    this.buddyDropdownChange = this.buddyDropdownChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCityDropdown = this.handleCityDropdown.bind(this);
    // console.log(props);
  }



// assignTemplate = (data) => async => {
//   const res = await axios.post("/api/set", set);
// }

// #region : FUNCTIONS
toggleEdit = () => {
  this.setState(
    {isEdit: !this.state.isEdit}
  )
}

handleDateChange = (startDate) => {
  // console.log(startDate);
  // console.log(typeof(startDate));
  // const startYear = (moment(startDate).format('YYYY'));
  // const startMonth = (moment(startDate).format('MM'));
  // const startDay = (moment(startDate).format('DD'));

  // let moment1 = moment(startDate).format("L");
  // console.log(typeof(moment1));

  // PostgreSQL takes format 'YYYY, MM, DD'
  // const formattedDate = startYear + "," + startMonth + "," + startDay;
  // console.log(formattedDate);
  


  this.setState(
    { startDate: startDate }
  )
}

handleCityDropdown = (e) => {
  // console.log(e["id"]);
  // console.log(this);
  // console.log(this.props.cities[e["id"]]);
  // console.log(this.props.cities[e["id"]].value);
  this.setState({
    city: this.props.cities[e["id"]].value,
    citiesDropdownIndex: e["id"]
  })
}

handleAssignButtonClick = () => {
  // console.log(this);
  // console.log("Assigned");
  this.setState(
    {
      isEdit: true
    }
  )
  // console.log(this);
}

createSet = () => {
  // console.log(this.props.newSet);
  // console.log(typeof(this.props.newSet));
  console.log(this.props.newSet.newSet["set_id"]);
  this.props.postNewSequence(this.props.newSet.newSet["set_id"])

}

handleFormSubmit = async() => {
  console.log(this);
  // console.log(this.props.cities[0].value);

  let data = {
    "template_id" : this.props.template.id,
    "description": this.props.template.description,
    "city": this.state.city,
    "start_date_year": parseInt(moment(this.state.startDate).format("YYYY")),
    "start_date_month": parseInt(moment(this.state.startDate).format("M")),
    "start_date_date": parseInt(moment(this.state.startDate).format("D")),
    "employee_id": this.state.employeeId,
    "manager_id": this.state.managerId,
    "buddy_id": this.state.buddyId
  }

  console.log(data);
  // console.log(typeof(data));
  // console.log(data["city"].value);


  await this.props.postNewSet(data);
  this.createSet()
  this.toggleEdit();
}

handleFormCancel = () => {
  this.setState(
    {
      isEdit: false,
      currentTemplate: null
    }
  )
}

employeeDropdownChange = (dropdownIndex) => {
  // console.log(`employee: ${dropdownIndex}`);
  this.setState({
    employeeId: dropdownIndex+1
  });
}

managerDropdownChange = (dropdownIndex) => {
  // console.log(`manager: ${dropdownIndex}`);
  this.setState({
    managerId: dropdownIndex+1
  });
}

buddyDropdownChange = (dropdownIndex) => {
  // console.log(`buddy: ${dropdownIndex}`);
  this.setState({
    buddyId: dropdownIndex+1
  });
}

// #endregion

// #region : RENDER
  // #region : commented out
  // Plain render template without anything extra
  // for non-admin view
  // renderTemplate(template, templateUrl){
  //   return(
  //     <div
  //     key={template.id}>
  //       <div className="card-content">
  //         <div className="row deep-orange lighten-5">
  //           <div className="col s12">
  //             <h5>
  //               <a 
  //               style={{ color: "black" }}
  //               href={templateUrl}
  //               className="card-title">
  //                 {template.template_name}
  //               </a>
  //             </h5>
  //             <div>
  //               <p>
  //               {template.description}
  //               </p>
  //             </div>
  //           </div>
            
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  // #endregion

  // Render template with extra column to assign template to a user
  renderTemplateAssign(template, templateUrl){
    return(
      <div
      key={template.id}>
        <div className="card-content">
          <div className="row deep-orange lighten-5 valign-wrapper">
            <div className="col s10">
              <h6>
                <a 
                style={{ color: "black" }}
                href={templateUrl}
                className="card-title">
                  {template.template_name}
                </a>
              </h6>
              <div>
                <p>
                <i>{template.description}</i>
                </p>
              </div>
            </div>
            <div className="col s2 center-align">
                <button
                className = "btn-small grey darken-1"
                type="button"
                onClick={this.handleAssignButtonClick}>
                  Assign
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Render template with user dropdown, submit and cancel button
  renderTemplateEdit(template, templateUrl){
    // console.log(this);

    const dropdownStyles = {
      option: (provided, state) => ({
        ...provided,
        borderBottom: '1px solid teal'
      }),

      control: base => ({
        ...base,
        width: "100%",
        height: "20px"
      })
    }

    // console.log(cities[0]["value"]);
    // console.log(this.state.city);
    return(
      <div
      key={template.id}>
        <div className="card-content grey lighten-4">
          {/* Row 1: Name + Description */}
          <div 
            className="row grey lighten-2"
            style={{marginBottom:"5px"}}>
            <div className="col s12">
              <h5>
                <a 
                style={{ color: "black" }}
                href={templateUrl}
                className="card-title"
                onClick = {() => {
                  // this.props.getTemplatePositions(template.id);
                }}>
                  {template.template_name}
                </a>
              </h5>
            <div>
              <p>
              {template.description}
              </p>
            </div>
            </div>
          </div>

          {/* Row 2: City, Start Date */}
          <div 
            className="row grey lighten-3 valign-wrapper"
            style={{marginBottom: "2px"}}>
            {/* Dropdown - City */}
            <div className="col s2 center-align">
              City:
            </div>

            <div className="col s4">
              <Select
                styles = {dropdownStyles}
                style={{}}
                value={this.props.cities[this.state.citiesDropdownIndex]}
                onChange = { e => this.handleCityDropdown(e) }
                options = {this.props.cities}
              />
            </div>

            <div className="col s2 center-align">
                Start Date:
            </div>
            {/* DatePicker - Start Date */}
            <div className="col s4">
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleDateChange}
                  dateFormat="dd/mm/yyyy"/>
            </div>
          </div>

          {/* Row 3: Employee, Manager */}
          <div 
            className="row grey lighten-3 valign-wrapper"
            style={{marginBottom: "2px"}}>
            {/* Dropdown - Employee */}
            <div className="col s2 center-align">
              Employee:
            </div>
            <div className="col s4">
              <AllUsersDropdown
              className="employee"
              handleDropdownChange={this.employeeDropdownChange}/>
            </div>

            {/* Dropdown - Manager */}
            <div className="col s2 center-align">
              Manager:
            </div>
            <div className="col s4">
              <AllUsersDropdown
              className="manager"
              handleDropdownChange={this.managerDropdownChange}/>
            </div>
          </div>

          {/* Row 4: Buddy, Submit / Cancel buttons */}
          <div 
            className="row grey lighten-3 valign-wrapper">
            <div className="col s2 center-align">
              Buddy:
            </div>
            <div className="col s4">
              <AllUsersDropdown
              className="buddy"
              handleDropdownChange={this.buddyDropdownChange}/>
            </div>

            {/* Submit + Cancel buttons */}
            <div className="col s1"></div>
            <div className="col s2 center-align">
              <button
              className = "btn-small grey darken-1"
              type="button"
              onClick={this.handleFormSubmit}>
                Submit
              </button>
              </div>
            <div className="col s2 center-align">
              <button
              className = "btn-small grey darken-1"
              type="button"
              onClick={this.handleFormCancel}>
                Cancel
              </button>
            </div>
            <div className="col s1"></div>
          </div>
        </div>
      </div>
    );
  }

// #endregion


  render(){
    // console.log(this);
    const templateUrl = `/dashboard/templates/${this.props.template.id}/tasks`;
    if(this.state.isEdit === false){
      return(
        <div
        key={this.props.template.id}>
          {this.renderTemplateAssign(this.props.template, templateUrl)}
        </div>
      );
    }
    return(
      <div
      key={this.props.template.id}>
        {this.renderTemplateEdit(this.props.template, templateUrl)}
      </div>
    );
  }
}

function mapStateToProps(state){
  // console.log(state)
  return { 
    newSet: state.new_set
  }
}

export default connect(mapStateToProps, { AllUsersDropdown, postNewSet, postNewSequence })(Template);

