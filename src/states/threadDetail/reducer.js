import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.GET_THREAD_DETAIL_BYID:
      return action.payload.threadDetail;
    case ActionType.DO_LIKE_THREAD_BYID:
      // Check if the user has already liked the thread
      if (threadDetail.upVotesBy.includes(action.payload.userId)) {
        return threadDetail;
      }
      return {
        ...threadDetail,
        upVotesBy: [...threadDetail.upVotesBy, action.payload.userId],
        // Remove the userId from downVotesBy if it exists there
        downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.userId),
      };

    case ActionType.DO_UNLIKE_THREAD_BYID:
      // Check if the user has already unliked the thread
      if (threadDetail.downVotesBy.includes(action.payload.userId)) {
        return threadDetail;
      }
      return {
        ...threadDetail,
        downVotesBy: [...threadDetail.downVotesBy, action.payload.userId],
        // Remove the userId from upVotesBy if it exists there
        upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
