import React, { Component } from 'react';
import axios from 'axios';
//import ProfileForm from './ProfileForm'; <ProfileForm />


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    // this.fetchUsers = this.fetchUsers.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/users')
      .then(res =>
        this.setState({
          users: res.data.users
        })
      )
      .catch(console.error);
  }

  // fetchUsers = () => {
  //   {this.state.users.map(user =>
  //     <li key={user.id}>{user.name}</li>
  //   );
  //   }
  // }



  render() {
    return(
      <div>
        <div>
          <h1>Hello World</h1>
          <h1>Users</h1>
          <ul>
            {this.state.users.map(user =>
              <li key={user.id}>{user.name}</li>
            )
            }
          </ul>
        </div>

      </div>
    );
  }
}


export default App;
