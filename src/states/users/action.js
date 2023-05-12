import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function asyncRegisterUser({ fullName, email, password }) {
  return async () => {
    try {
      await api.register({ fullName, email, password });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  asyncRegisterUser,
};
