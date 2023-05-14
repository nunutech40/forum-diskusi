import React from 'react';
import PropTypes from 'prop-types';
import { BiLike, BiDislike, BiComment } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

function DiscussItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
  authUser,
  doLike,
  doUnlike,
}) {
  const navigate = useNavigate();
  const userName = `Di Posting Oleh: ${user ? user.name : ''}`;
  const likeCount = upVotesBy.length;
  const unlikeCount = downVotesBy.length;
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/thread/${id}`);
    }
  };

  const doLikeClick = (event) => {
    event.stopPropagation();
    doLike(id);
  };

  const doUnlikeClick = (event) => {
    event.stopPropagation();
    doUnlike(id);
  };

  return (
    <div role="button" tabIndex={0} className="discuss-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="discuss-item-detail">
        <header>
          <p className="discuss-item-category">
            Category:
            {' '}
            <span className="category">{category}</span>
          </p>
        </header>
        <article>
          <h2 className="discuss-item-title">{title}</h2>
          <p className="discuss-item-body" dangerouslySetInnerHTML={{ __html: body }} />
        </article>
        <div>
          <div className="discuss-item-user-info">
            <p className="discuss-item-date">{postedAt(createdAt)}</p>
            <p className="discuss-item-user-name">{userName}</p>
          </div>
        </div>
        {
          doLike && (
            <div className="discuss-item-likes">
              <div className="like-dislike">
                <button type="button" aria-label="like" onClick={doLikeClick}>
                  {isThreadLiked ? <BiLike style={{ color: 'red' }} /> : <BiLike />}
                </button>
                {' '}
                {likeCount}
                <button type="button" aria-label="unlike" onClick={doUnlikeClick}>
                  {isThreadDisliked ? <BiDislike style={{ color: 'red' }} /> : <BiDislike />}
                </button>
                {' '}
                {unlikeCount}
              </div>
              <div className="comment-info">
                <BiComment className="comment-icon" />
                {totalComments}
                {' '}
                Comments
              </div>
            </div>

          )
        }
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

DiscussItem.propTypes = {
  ...threadItemShape,
  doLike: PropTypes.func,
  doUnlike: PropTypes.func,
};

DiscussItem.defaultProps = {
  doLike: null,
  doUnlike: null,
};

export default DiscussItem;
