import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSets } from '../actions/index';


class Header extends Component {
  renderContent(){
    // console.log(this.props);
    // console.log(this.props.auth);

  

    // console.log(this.props.auth.user_id);

    switch (this.props.auth){
      case null:
        return;

      case false:
        return (
          <li><a href="/login/google">Login with Google</a></li>
        );

      default:
        if (!this.props.auth){
          return(
            <div>Loading.....</div>
          )
        }

        // console.log(this.props.auth.user_id);


        return (
          <div>
            <li id="nav-templates">
              <a href="/dashboard">Templates</a>
            </li>
            <li id="nav-sets">
              <a 
              href="/tasklist"
              onClick = {() => {
                this.props.getSets(this.props.auth.user_id)
              }}>
              Task Lists
              </a>
            </li>
            <li><a href="/api/logout">Logout</a></li>
          </div>
        );
    }
  }

  render(){
    // console.log(this.props)
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
  return { auth: state.auth };
}

export default connect( mapStateToProps, {getSets} )(Header);