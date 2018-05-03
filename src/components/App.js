import React, { Component } from 'react';
import ProfileForm from './ProfileForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      users: []
    });
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
    return(
      <div>
        <div>
          <h1>Hello World</h1>
          <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
        </div>
        <ProfileForm />
      </div>
    );
  }
}


export default App;
