import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getSets, fetchUser, getUserDetails, getSet } from '../../actions';


class SetsList extends Component {
  async componentDidMount(){
    // console.log(this.props);
    const res = await axios.get('/api/getcurrentuser');
    this.props.getSets(res.data.user_id);
    this.props.getUserDetails(res.data.user_id);
  }


  renderSets(){
    // console.log(this.props);
    
    return this.props.sets.map((set) => {
      // console.log(this.props);
      const setUrl = '/tasklist/'+set.set_id;
      return(
        <div key={set.set_id}>
          <div className="card-content">
            <div className="row deep-orange lighten-5">
              <div className="col s12">
                <h5>
                  <a
                  style={{ color: "black" }}
                  href={setUrl}
                  className="card-title"
                  onClick = {() => {
                    // this.props.getSet(set.set_id);
                  }}>
                    {set.description}
                  </a>
                </h5>
                <div>
                  <ul>City: {set.city}</ul>
                  <ul>Start Date: {set.start_date}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }


  renderUserDetails(){
    // console.log(this.props);
    return(
      <div className="card-content">
        <div className="row deep-orange accent-4">
          <div className="col s12">
            <h6 style={{ color: 'white'}}>
              Task Lists for {this.props.user.given_name} {this.props.user.family_name}
            </h6>
          </div>
        </div>
      </div>
    )
  }


  render(){
    // console.log(this.state);
    // console.log(this.props)
    
    if(!this.props.sets || !this.props.user){
    // if(!this.props.user){
      // console.log("render 0");
      return(
        <div></div>
        )
      }
      
    // console.log("render 1");
    return(
      <div>
        {this.renderUserDetails()}
        {this.renderSets()}
      </div>
    );
  }
}


function mapStateToProps(state){
  // console.log(state);
  return { sets: state.sets,
           user: state.user };
}


export default connect(mapStateToProps, { getSets, fetchUser, getUserDetails, getSet }) (SetsList);