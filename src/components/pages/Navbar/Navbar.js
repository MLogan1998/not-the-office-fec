import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import PropTypes from 'prop-types';
import './Navbar.scss';

class NavBar extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  signIn = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  signOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { authed } = this.props;
    const buildNav = () => {
      if (authed) {
        return (
          <Nav className="container-fluid" navbar>
          <NavItem className="ml-auto">
            <NavLink className="lnk" onClick={this.signOut}><i class="far fa-user mr-2"></i>Log Out</NavLink>
          </NavItem>
        </Nav>
        );
      }
      return <Nav className="container-fluid" navbar>
               <NavItem className="ml-auto">
                 <NavLink className="lnk" onClick={this.signIn}><i class="far fa-user mr-2"></i>Log In</NavLink>
               </NavItem>
             </Nav>;
    };

    return (
      <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand className="lnk" href="/">Not The Office Again</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="container-fluid" navbar>
          {buildNav()}
        </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default NavBar;
