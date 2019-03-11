import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent(){
      switch (this.props.auth){
        case null:
          return;

        case false:
          return (
            <li><a href="/login/google">Login with Google</a></li>
          );

        default:
          return (
            <li><a href="/api/logout">Logout</a></li>
          );

      }
  }

  render(){
    // console.log(this.props)
    return(
     <nav>
      <div className="nav-wrapper blue darken-2">
        <Link 
          to={this.props.auth ? '/templates' : '/'} 
          className="left brand-logo"
        >
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

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(Header);