import { ActionType } from './action';

function threadsReduces(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_ALL_DISCUSS:
      return action.payload.threads;
    case ActionType.DO_LIKE_THREAD:
      return threads.map((thread) => {
        const { threadId } = action.payload.threadId;
        if (thread.id === threadId) {
          const userVoted = thread.upVotesBy.includes(action.payload.userId);
          return {
            ...thread,
            upVotesBy: userVoted
              ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
              : [...thread.upVotesBy, action.payload.userId],
          };
        }
        return thread;
      });
    case ActionType.DO_UNLIKE_THREAD:
      return threads.map((thread) => {
        const { threadId } = action.payload.threadId;
        if (thread.id === threadId) {
          const userDownVoted = thread.downVotesBy.includes(action.payload.userId);
          return {
            ...thread,
            downVotesBy: userDownVoted
              ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
              : [...thread.downVotesBy, action.payload.userId],
          };
        }
        return thread;
      });
    default:
      return threads;
  }
}

export default threadsReduces;
