/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function DiscussItem({
  id, title, body, category, createdAt, like,
}) {
  return (
    <div className="discuss-item">
      <h2 className="discuss-item-title">{title}</h2>
      <p className="discuss-item-body">{body}</p>
      <p className="discuss-item-category">
        Category:
        {' '}
        {category}
      </p>
      <p className="discuss-item-date">
        Posted at:
        {' '}
        {postedAt(createdAt)}
      </p>
      <button onClick={like}>Like</button>
    </div>
  );
}

DiscussItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  like: PropTypes.func,
};

DiscussItem.defaultProps = {
  like: null,
};

export default DiscussItem;
