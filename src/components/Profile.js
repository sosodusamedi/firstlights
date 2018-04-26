import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}


Profile.propTypes = {
  name: PropTypes.string.isRequired
};


export default Profile;
