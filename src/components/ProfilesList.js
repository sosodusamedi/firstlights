import React from 'react';
import PropTypes from 'prop-types';
import ProfilePreview from './ProfilePreview';


const ProfileList = ({ users, onUserClick }) => (
  <div className="ProfileList">
    {Object.key(users).map(userId =>
      <ProfilePreview
        key={userId}
        onClick={onUserClick}
        {...users[userId]} />
    )}
  </div>
);

ProfileList.propTypes = {
  users: PropTypes.object.isRequired,
  onUserClick: PropTypes.func.isRequired
};

export default ProfileList;
