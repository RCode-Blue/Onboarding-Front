import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSets } from '../actions/index';


class Header extends Component {
  renderContent(){
    // console.log(this);
    // console.log(this.props.auth);
    // console.log(this.props.auth.user_id);

    switch (this.props.auth){
    // switch (this.props.frontEndAuth){
      case null:
        // Front-end
        return (
          <li><a href="/" onClick={this.props.userLoginFE}>Google Login</a></li>
        );

      case false:
        // return(<div></div>);
        // return (
        //   <li><a href="https://pure-sands-57711.herokuapp.com/login/google">Login with Google</a></li>
        // );
        return (
          <li><a href="http://localhost:5000/login/google">Login with Google</a></li>
        );

      default:
        if (!this.props.auth){
        // if (!this.props.frontEndAuth){
          return(
            <div>Loading.....</div>
          )
        }

        // console.log(this.props.auth.user_id);


      return (
        <div>
          <li id="nav-templates">
            <a href="/dashboard">
            Templates
            </a>
          </li>
          <li id="nav-sets">
            <a 
            href="/tasklists"
            onClick = {() => {
              this.props.getSets(this.props.auth.user_id)
            }}>
            Task Lists
            </a>
          </li>
          <li id="nav-sets">
            <a 
            href="/tasks">
            All Tasks
            </a>
          </li>

          {/*
          <li><a href="https://pure-sands-57711.herokuapp.com/api/logout">Logout</a></li>
          */}

          {/*
          <li><a href="/api/logout">Logout</a></li>
          */}

        </div>
      );
    }
  }

  render(){
    console.log(this);
    // console.log(process.env);
    return(
     <nav>
      <div className="nav-wrapper deep-orange darken-4">
        <Link 
          id="hdr-Onboarding"
          to={this.props.auth ? '/' : '/'} 
          className="left brand-logo">
          Home
        </Link>
        <ul className="right">
          { this.renderContent() }
        </ul>
      </div>
     </nav>
    );
  }
}

// function mapStateToProps({ auth }){
//   return { auth };
// }

function mapStateToProps( state ){
  // console.log(state);
  return { auth: state.auth, frontEndAuth: state.frontEndAuth };
}

export default connect( mapStateToProps, { getSets } )(Header);