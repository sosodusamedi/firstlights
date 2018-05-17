import React, { Component } from 'react';
// import axios from 'axios';
import ProfileForm from './ProfileForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('https://firstlights.herokuapp.com/')
      .then(res =>
        this.setState({
          users: res.data.users
        })
      )
      .catch(console.error);
  }



  render() {
    return(
      <div>
        <div>
          <h1>Hello World</h1>
          <h1>Users</h1>
          <ul>
            {this.state.users.map(user =>
              <li key={user.id}>
                <ul>
                  <li>{user.name}</li>
                  <li>{user.tel}</li>
                </ul>
              </li>
            )
            }
          </ul>
        </div>
        <ProfileForm />
      </div>
    );
  }
}


export default App;
