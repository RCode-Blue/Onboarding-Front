import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent(){
    // console.log(this.props)
    switch (this.props.auth){
      case null:
        return;

      case false:
        return (
          <li><a href="/login/google">Login with Google</a></li>
        );

      default:
        return (
          <div>
            <li id="nav-templates">
              <a href="/dashboard">Templates</a>
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
          to={this.props.auth ? '/dashboard' : '/'} 
          className="left brand-logo">
          Onboarding
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

export default connect(mapStateToProps)(Header);