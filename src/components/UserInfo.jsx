import React from 'react';

function UserInfo({ avatarUrl, name, isComment }) {
  return (
    <div className="UserInfo">
      <img
        className="Avatar"
        height={isComment ? 50 : 100}
        src={avatarUrl}
        alt={name}
      />
      <div className="UserInfo-name">{name}</div>
    </div>
  );
}

export default UserInfo;
