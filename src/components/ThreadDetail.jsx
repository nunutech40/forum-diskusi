import React from 'react';
import PropTypes from 'prop-types';
import { BiLike, BiDislike, BiComment } from 'react-icons/bi';
import { postedAt } from '../utils';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  comments,
  owner,
  authUser,
  doLike,
  doUnlike,
  addComment,
}) {
  const userName = owner ? owner.name : '';
  const userAvatar = owner ? owner.avatar : '';
  const likeCount = upVotesBy.length;
  const unlikeCount = downVotesBy.length;
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const doLikeClick = (event) => {
    event.stopPropagation();
    doLike(id);
  };

  const doUnlikeClick = (event) => {
    event.stopPropagation();
    doUnlike(id);
  };

  return (
    <div role="button" tabIndex={0} className="discuss-item">
      <div className="discuss-item-user-photo">
        <img src={userAvatar} alt={userName} />
      </div>
      <div className="discuss-item-detail">
        <header>
          <div className="discuss-item-user-info">
            <p className="discuss-item-user-name">{userName}</p>
          </div>
          <p className="discuss-item-date">{postedAt(createdAt)}</p>
        </header>
        <article>
          <h2 className="discuss-item-title">{title}</h2>
          <p className="discuss-item-body" dangerouslySetInnerHTML={{ __html: body }} />
          <p className="discuss-item-category">
            Category:
            {' '}
            <span className="category">{category}</span>
          </p>
        </article>
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
                {comments.length}
                {' '}
                Comments
              </div>
            </div>

          )
        }
        <div className="comment-section">
          <h3>Comments</h3>
          <CommentInput addComment={addComment} />
          <CommentList comments={comments} doLike={doLike} doUnlike={doUnlike} />
        </div>
      </div>
    </div>
  );
}

const ownerShape = {
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
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadDetail.propTypes = {
  ...threadItemShape,
  doLike: PropTypes.func,
  doUnlike: PropTypes.func,
};

ThreadDetail.defaultProps = {
  doLike: null,
  doUnlike: null,
};

export default ThreadDetail;
