import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  GET_THREAD_DETAIL_BYID: 'GET_THREAD_DETAIL_BYID',
};

function getThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.GET_THREAD_DETAIL_BYID,
    payload: {
      threadDetail,
    },
  };
}

function asyncThreadDetailById(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const getThreaDetail = await api.getDiscussDetail(threadId);
      console.log('cek gettrhead: ', getThreaDetail);
      dispatch(getThreadDetailActionCreator(getThreaDetail));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  getThreadDetailActionCreator,
  asyncThreadDetailById,
};
