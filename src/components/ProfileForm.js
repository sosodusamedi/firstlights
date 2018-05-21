import React, { Component } from 'react';
const axios = require('axios');
import { MONGOLAB_URI } from '../../config.js';

const uri = MONGOLAB_URI;

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tel: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTelChange = this.handleTelChange.bind(this);
    this.addToProfiles = this.addToProfiles.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleTelChange(e) {
    this.setState({
      tel: e.target.value
    });
  }

  addToProfiles(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value,
      tel: e.target.value
    });

    axios.post(uri, {
      name: this.state.name,
      tel: this.state.tel,
    })
      .then(response => {
        console.info(response, 'Profile added!');
      })
      .catch(err => {
        console.info(err, 'Profile not added, try again');
      });

    this.setState({
      name: '',
      tel: '',
    });
  }


  render() {
    return(
      <div>
        <form>
          <label>Full Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}/>
          </label>
          <br />
          <label>Contact - Phone:
            <input
              type="number"
              name="tel"
              value={this.state.tel}
              onChange={this.handleTelChange} />
          </label>
          <br />
          <button
            type="submit"
            value="submit"
            onClick={this.addToProfiles}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}


export default ProfileForm;
