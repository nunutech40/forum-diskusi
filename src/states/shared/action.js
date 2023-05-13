import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { getAllUsersActionCreator } from '../users/action';
import { getAllDiscussActionCreator } from '../threads/action';

function asyncGetAllDiscussAndUsers() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const discussList = await api.getAllDiscuss();
      const userList = await api.getAllUsers();

      dispatch(getAllDiscussActionCreator(discussList));
      dispatch(getAllUsersActionCreator(userList));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

// eslint-disable-next-line import/prefer-default-export
export { asyncGetAllDiscussAndUsers };
