import React, { Component } from 'react';
import { LinkButton, OutlineButton } from 'tailwind-react-ui';
import { connect } from 'react-redux';
import axios from "axios";
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import CreateEventForm from '../Events/EventForm'


// signUpHandler

const mapStateToProps = (state) => {
 return {
   isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn
 }
}
class LoginControl extends Component {
 constructor(props) {
   super(props);
   this.state = {
     displayLoginForm: false,
     displaySignUpForm: false,
     displayEventForm: false
   }
   this.loginHandler = this.props.loginHandler.bind(this);
   this.handleLogoutClick = this.props.logoutHandler.bind(this);
   this.signUpHandler = this.props.signUpHandler.bind(this)
 }

 displayLoginForm() {
   this.setState({displayLoginForm: true})
 }

 hideLoginForm() {
  this.setState({displayLoginForm: false})
 }

 displaySignUpForm() {
   this.setState({displaySignUpForm: true})
 }

 hideSignUpForm() {
   this.setState({displaySignUpForm: false})
 }

 handleLoginClick(e) {
   this.setState({displayLoginForm: false})
   this.loginHandler(e);
 }

 handleSignUpClick(e) {
   this.setState({displaySignUpForm: false})
   this.signUpHandler(e);
 }

 displayEventForm() {
   this.setState({ displayEventForm: true })
 }

  hideEventForm() {
   this.setState({ displayEventForm: false })
 }

  async createEvent(event) {

    const credentials = {
     'access-token': localStorage.getItem('access-token'),
     'token-type': localStorage.getItem('token-type'),
     'client': localStorage.getItem('client'),
     'expiry': localStorage.getItem('expiry'),
     'uid': localStorage.getItem('uid'),
   }
   let response = await axios.post('http://localhost:3000/groups/1/events', { event }, { headers: credentials })
   this.hideEventForm()
   console.log(response)
 }

 render() {
   const isSignedIn = this.props.isSignedIn;
   let startNewGroupLink, createEventLink, logoutButton, profileLink, loginButton, registerButton, loginForm, signUpForm, eventForm
   if (isSignedIn) {
     createEventLink = <LinkButton onClick={this.displayEventForm.bind(this)} text="grey-darkest" text-hocus="teal" style={{ textDecoration: 'none' }}>Create an event</LinkButton>
     startNewGroupLink = <LinkButton text="grey-darkest" text-hocus="teal" style={{ textDecoration: 'none' }}>Start a new group</LinkButton>
     profileLink = <LinkButton text="grey-darkest" text-hocus="teal" style={{ marginLeft: '13px', textDecoration: 'none' }}>Profile</LinkButton>
     logoutButton = <OutlineButton onClick={this.handleLogoutClick.bind(this)} brand="primary" text-hocus="white" style={{ marginLeft: '15px' }}>
       Log out</OutlineButton>;
   } else {
     loginButton = <OutlineButton onClick={this.displayLoginForm.bind(this)} id="login-btn" brand="primary" text-hocus="white">
      Log in</OutlineButton>;
     registerButton = <OutlineButton onClick={this.displaySignUpForm.bind(this)} brand="primary" text-hocus="white" style={{ marginLeft: '10px' }}>
       Sign up</OutlineButton>
   }

   if (this.state.displayEventForm) {
     let overlay = document.getElementById('overlay')
     if (overlay) {
       overlay.style.display = ''
       document.getElementById('create-event-form').reset()
     }
     eventForm = <CreateEventForm createEventHandler={this.createEvent.bind(this)} hideFormHandler={this.hideEventForm.bind(this)} />
   }

   if (this.state.displaySignUpForm) {
     let overlay = document.getElementById('overlay')
     let form = document.getElementById('signup-form')
     if (overlay && form) {
       overlay.style.display = ''
       form.reset()
     }
     signUpForm = <SignUpForm signUpHandler={this.handleSignUpClick.bind(this)} hideFormHandler={this.hideSignUpForm.bind(this)}/ >
   };

   if (this.state.displayLoginForm) {
     let overlay = document.getElementById('overlay')
     if (overlay) {

      overlay.style.display = ''
      document.getElementById('login-form').reset()
    }
    loginForm = <LoginForm loginHandler={this.handleLoginClick.bind(this)} hideFormHandler={this.hideLoginForm.bind(this)}/ >
  }

  return (
    <>
      {createEventLink}
      {startNewGroupLink}
      {profileLink}
      {logoutButton}
      {loginButton}
      {registerButton}
      {loginForm}
      {signUpForm}
      {eventForm}
    </>
  );
}
}

export default connect(mapStateToProps)(LoginControl);

