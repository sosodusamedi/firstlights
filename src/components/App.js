import React, { Component } from 'react';
//import ProfileForm from './ProfileForm'; <ProfileForm />


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: []
  //   };
  //   this.renderUsers = this.renderUsers.bind(this);
  // }
  //
  // componentDidMount() {
  //   fetch('/api/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }
  //
  // renderUsers() {
  //   return this.state.users.map(user =>
  //     <div key={user.id}>{user.name}</div>
  //   );
  // }


  render() {
    return(
      <div>
        <div>
          <h1>Hello World</h1>
          <h1>Users</h1>
          
        </div>

      </div>
    );
  }
}


export default App;
