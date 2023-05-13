const ActionType = {
  GET_ALL_DISCUSS: 'GET_ALL_DISCUSS',
};

function getAllDiscussActionCreator(threads) {
  return {
    type: ActionType.GET_ALL_DISCUSS,
    payload: {
      threads,
    },
  };
}

export {
  ActionType,
  getAllDiscussActionCreator,
};
