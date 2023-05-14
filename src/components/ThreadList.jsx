import React from 'react';
import DiscussItem from './DiscussItem';

// eslint-disable-next-line react/prop-types
function ThreadList({ threads, doLike }) {
  return (
    <div className="thread-list">
      {
        // eslint-disable-next-line react/prop-types
        threads.map((thread) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <DiscussItem key={thread.id} {...thread} doLike={doLike} />
        ))
      }
    </div>
  );
}

export default ThreadList;
