import { ActionType } from './action';

function threadsReduces(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_ALL_DISCUSS:
      return action.payload.threads;
    default:
      return threads;
  }
}

export default threadsReduces;
