import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSetPositions } from '../../actions';


class SetPositions extends Component {

  render(){
    return(
      <div>
        <h2>Set Positions</h2>
      </div>
    )
  }
}

export default SetPositions;