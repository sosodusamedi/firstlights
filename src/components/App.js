import React, { Component } from 'react';
import ProfileForm from './ProfileForm';
// import ProfilesList from './ProfilesList';
// import Profile from './Profile';
// import * as api from '../api';
//
//
// const pushState = (obj, url) =>
//   window.history.pushState(obj, '', url);


class App extends Component {
  constructor() {
    super();
    // this.currentContent = this.currentContent.bind(this);
    // this.currentUser = this.currentUser.bind(this);
  }

  componentDidMount() {

  }


  // fetchUser = (userId) => {
  //   pushState(
  //     {currentUserId: userId},
  //     `/users/${userId}`
  //   );
  //
  //   api.fetchUser(userId).then(user => {
  //     this.setState({
  //       currentUserId: user.id,
  //       users: {
  //         ...this.state.users,
  //         [user.id]: user
  //       }
  //     });
  //   });
  // }
  //
  // currentUser() {
  //   this.state.users[this.state.currentUserId];
  // }
  //
  // currentContent() {
  //   if (this.state.currentUserId) {
  //     return <Profile {...this.currentUser()} />;
  //   }
  //
  //   return <ProfilesList
  //     onUserClick={this.fetchUser}
  //     users={this.state.users} />;
  // }

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        {/* <div>
          {this.currentContent}
        </div> */}
        <ProfileForm />
      </div>
    );
  }
}


export default App;
