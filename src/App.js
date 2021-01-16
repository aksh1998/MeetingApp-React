// Import React
import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import firebase from './Components/Firebase';

import Home from './Components/Home';
import Welcome from './Components/Welcome';
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Register from './Components/Register';
import Meetings from './Components/Meetings';
import CheckIn from './Components/CheckIn';
import Attendees from './Components/Attendees';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });

        const meetingsRef = firebase
          .database()
          .ref('meetings/' + FBUser.uid);

        meetingsRef.on('value', snapshot => {
          let meetings = snapshot.val();
          let meetingsList = [];

          for (let item in meetings) {
            meetingsList.push({
              meetingID: item,
              meetingName: meetings[item].meetingName
            });
          }

          this.setState({
            meetings: meetingsList,
            howManyMeetings: meetingsList.length
          });
        });
      } else {
        this.setState({ user: null });
      }
    });
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate('/meetings');
      });
    });
  };

  logOutUser = e => {
    e.preventDefault();
    this.setState({
      displayName: null,
      userID: null,
      user: null
    });

    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate('/login');
      });
  };
  addMeeting = meetingName => {
    const ref = firebase
      .database()
      .ref(`meetings/${this.state.user.uid}`);
    ref.push({ meetingName: meetingName });
  };
  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && <Welcome userName={this.state.displayName} logOutUser={this.logOutUser} />}

        <Router basepath="/">
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Meetings path="/meetings" addMeeting={this.addMeeting} meetings={this.state.meetings} userID={this.state.userID} />
          <Attendees
            path="/attendees/:userID/:meetingID"
            adminUser={this.state.userID}
          />
          <CheckIn path="/checkin/:userID/:meetingID" />
          <Register
            path="/register"
            registerUser={this.registerUser}
          />
        </Router>
      </div>
    );
  }
}

export default App;