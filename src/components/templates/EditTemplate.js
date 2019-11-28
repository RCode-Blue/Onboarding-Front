import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditTemplate extends Component {
  constructor(props){

  }

  render(){
    return(
      <div>
        Edit Template
      </div>
    )
  }

}

export default connect(null, {})(EditTemplate);
