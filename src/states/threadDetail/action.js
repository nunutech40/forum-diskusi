import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  GET_THREAD_DETAIL_BYID: 'GET_THREAD_DETAIL_BYID',
  DO_LIKE_THREAD_BYID: 'DO_LIKE_THREAD_BYID',
  DO_UNLIKE_THREAD_BYID: 'DO_UNLIKE_THREAD_BYID',
};

function getThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.GET_THREAD_DETAIL_BYID,
    payload: {
      threadDetail,
    },
  };
}

function doLikeThreadByIdActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DO_LIKE_THREAD_BYID,
    payload: {
      threadId,
      userId,
    },
  };
}

function doUnLikeThreadByIdActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DO_UNLIKE_THREAD_BYID,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncThreadDetailById(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const getThreaDetail = await api.getDiscussDetail(threadId);
      dispatch(getThreadDetailActionCreator(getThreaDetail));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDoLikeThreadById(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    // Use the updatedThread data directly, instead of creating a new object
    dispatch(doLikeThreadByIdActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.doLike(threadId);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
      dispatch(doLikeThreadByIdActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncDoUnlikeThreadById(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();

    dispatch(doUnLikeThreadByIdActionCreator({ threadId, userid: authUser.id }));
    try {
      await api.doUnLike(threadId);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
      dispatch(doUnLikeThreadByIdActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  getThreadDetailActionCreator,
  asyncThreadDetailById,
  doLikeThreadByIdActionCreator,
  doUnLikeThreadByIdActionCreator,
  asyncDoLikeThreadById,
  asyncDoUnlikeThreadById,
};
