import React from 'react';
import PropTypes from 'prop-types';
import {
  Description,
  DescriptionText,
  Img,
  Name,
  ProfileWrapper,
  StatsItem,
  StatsList,
} from './Profile.styled';
// import user from './user.json';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <Description>
        <Img src={avatar} alt={username} />
        <Name>{username}</Name>
        <DescriptionText>@{tag}</DescriptionText>
        <DescriptionText>{location}</DescriptionText>
      </Description>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
