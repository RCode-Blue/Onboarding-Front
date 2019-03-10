import React, {Component} from 'react';

class Header extends Component {
  render(){
    return(
     <nav>
      <div className="nav-wrapper blue darken-2">
        <a className="left brand-logo">
          Onboarding
        </a>
        <ul className="right">
          <li>
            <a>Login with Google</a>
          </li>
        </ul>
      </div>
     </nav>
    );
  }
}

export default Header;