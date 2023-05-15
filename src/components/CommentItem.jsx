import React from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function CommentItem({
  id, content, owner, upVotesBy, downVotesBy, doLike, doUnlike,
}) {
  return (
    <div key={id} className="comment-item">
      <img src={owner.avatar} alt={owner.name} />
      <div>
        <h4>{owner.name}</h4>
        <p className="discuss-item-body" dangerouslySetInnerHTML={{ __html: content }} />
        <div>
          <button type="button" onClick={() => doLike(id)}>
            <FaThumbsUp />
            {' '}
            {upVotesBy.length}
          </button>
          <button type="button" onClick={() => doUnlike(id)}>
            <FaThumbsDown />
            {' '}
            {downVotesBy.length}
          </button>
        </div>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  doLike: PropTypes.func.isRequired,
  doUnlike: PropTypes.func.isRequired,
};

export default CommentItem;
