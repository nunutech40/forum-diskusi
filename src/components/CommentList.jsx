/* eslint-disable react/prop-types */
import React from 'react';
import CommentItem from './CommentItem';

function CommentList({ comments, doLike, doUnlike }) {
  return (
    <div className="thread-list">
      {
        // eslint-disable-next-line react/prop-types
        comments.map((comment) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <CommentItem key={comment.id} {...comment} doLike={doLike} doUnlike={doUnlike} />
        ))
      }
    </div>
  );
}

export default CommentList;
