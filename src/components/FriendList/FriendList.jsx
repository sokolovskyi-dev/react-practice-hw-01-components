import React from 'react';
import PropTypes from 'prop-types';
import { Friend, FriendListWrapper, Name, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id}>
          <Status $isOnline={isOnline}></Status>
          <img src={avatar} alt={name} width="48" />
          <Name>{name}</Name>
        </Friend>
      ))}
    </FriendListWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
