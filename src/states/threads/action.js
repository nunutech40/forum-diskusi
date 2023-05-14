import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  GET_ALL_DISCUSS: 'GET_ALL_DISCUSS',
  DO_LIKE_THREAD: 'DO_LIKE_THREAD',
  DO_UNLIKE_THREAD: 'DO_UNLIKE_THREAD',
};

function getAllDiscussActionCreator(threads) {
  return {
    type: ActionType.GET_ALL_DISCUSS,
    payload: {
      threads,
    },
  };
}

function doLikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DO_LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function doUnLikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DO_UNLIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncDoLikeThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    // Use the updatedThread data directly, instead of creating a new object
    dispatch(doLikeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.doLike(threadId);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
      dispatch(doLikeThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncDoUnlikeThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();

    dispatch(doUnLikeThreadActionCreator({ threadId, userid: authUser.id }));
    try {
      await api.doUnLike(threadId);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
      dispatch(doUnLikeThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  getAllDiscussActionCreator,
  doLikeThreadActionCreator,
  asyncDoLikeThread,
  asyncDoUnlikeThread,
};
