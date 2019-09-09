import React, { Component } from 'react';

class SetTaskCheckbox extends Component{
  constructor(props){
    super(props);
    this.state={
      isChecked: false,
      label: this.props.label
    }
  }


  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked
      }
    ));

    handleCheckboxChange(label);
  }

  render(){
    const { label } = this.props;
    const { isChecked } = this.state;

    return(
      <div>
        <label>
          <input type = "checkbox"
          id = "chk"
          value = {label}
          checked = {isChecked}
          onChange = {this.toggleCheckboxChange}/>
          xxx
        </label>
      </div>
    );
  }
}

export default(SetTaskCheckbox);



