import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProfilePreview extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.onClick(this.props.id);
  }

  render() {
    return(
      <div className="ProfilePreview" onClick={this.handleClick}>
        <div>
          {this.props.name}
        </div>
        <div>
          {this.props.tel}
        </div>
      </div>
    );
  }
}

ProfilePreview.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};


export default ProfilePreview;
