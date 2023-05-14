import { ActionType } from './action';

function threadDetailReduces(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.GET_THREAD_DETAIL_BYID:
      return action.payload.threadDetail;
    default:
      return threadDetail;
  }
}

export default threadDetailReduces;
