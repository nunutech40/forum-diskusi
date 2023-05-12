/* eslint-disable no-alert */
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  asyncRegisterUser,
};
