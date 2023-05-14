import React from 'react';
import ThreadDetail from './ThreadDetail';

// eslint-disable-next-line react/prop-types
function ThreadList({ threads, doLike, doUnlike }) {
  return (
    <div className="thread-list">
      {
        // eslint-disable-next-line react/prop-types
        threads.map((thread) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ThreadDetail key={thread.id} {...thread} doLike={doLike} doUnlike={doUnlike} />
        ))
      }
    </div>
  );
}

export default ThreadList;
