import React from 'react';
import PropTypes from 'prop-types';
import DiscussItem from './DiscussItem';

// eslint-disable-next-line react/prop-types
function ThreadList({ threads, like }) {
  return (
    <div className="thread-list">
      {
         // eslint-disable-next-line react/prop-types
         threads.map((thread) => (
           // eslint-disable-next-line react/jsx-props-no-spreading
           <DiscussItem key={thread.id} {...thread} like={like} />
         ))
      }
    </div>
  );
}

ThreadList.propTypes = {
  like: PropTypes.func.isRequired,
};

export default ThreadList;
