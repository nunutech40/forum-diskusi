/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { BiLike, BiDislike, BiComment } from 'react-icons/bi';
import { postedAt } from '../utils';

function DiscussItem({
  id, title, body, category, createdAt, upVotesBy, downVotesBy, totalComments, user, authUser,
}) {
  const userName = user ? user.name : '';
  const likeCount = upVotesBy.length;
  const unlikeCount = downVotesBy.length;

  return (
    <div className="discuss-item">
      <h2 className="discuss-item-title">{title}</h2>
      <p className="discuss-item-body">{body}</p>
      <p className="discuss-item-category">
        Category:
        {' '}
        <span className="category">{category}</span>
      </p>
      <p className="discuss-item-date">
        Posted at:
        {' '}
        <span className="date">{postedAt(createdAt)}</span>
      </p>
      <div className="discuss-item-actions">
        <button className="like-button" onClick={upVotesBy}>
          {upVotesBy.includes(authUser) ? (
            <BiDislike className="like-icon" />
          ) : (
            <BiLike className="like-icon" />
          )}
          Like
          {' '}
          {likeCount}
        </button>
        <button className="unlike-button" onClick={downVotesBy}>
          {downVotesBy.includes(authUser) ? (
            <BiLike className="like-icon" />
          ) : (
            <BiDislike className="like-icon" />
          )}
          Unlike
          {' '}
          {unlikeCount}
        </button>
        <div className="comment-info">
          <BiComment className="comment-icon" />
          {totalComments}
          {' '}
          Comments
        </div>
        <div className="posted-by">
          Posted by:
          {' '}
          {userName}
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

DiscussItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
};

export default DiscussItem;
