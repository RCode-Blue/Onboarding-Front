import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getSets, fetchUser } from '../../actions';


class SetsList extends Component {
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     sets: []
  //   };
  // }


  async componentDidMount(){
    const res = await axios.get('/api/getcurrentuser');
    this.props.getSets(res.data.user_id);
  }


  renderSets(){
    return this.props.sets.map((set) => {
      return(
        <div key={set.set_id}>
          <div>
            <ul>{set.description}</ul>
          </div>
        </div>
      );
    });
  }


  render(){
    // console.log(this.state);
    console.log(this.props)
    
    if(!this.props.sets){
      // console.log("render 0");
      return(
        <div></div>
        )
      }
      
    // console.log("render 1");
    return(
      <div>
        {this.renderSets()}
      </div>
    );
  }
}


function mapStateToProps(state){
  // console.log(state);
  return { sets: state.sets };
}


export default connect(mapStateToProps, { getSets, fetchUser }) (SetsList);