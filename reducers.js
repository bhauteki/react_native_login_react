import {
  LOGIN_ACTION,
  LOGOUT_ACTION,
} from './actions';

const initialState = {
  email: null,
  accessToken: null,
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        email: action.email,
        accessToken: action.accessToken,
      };
    case LOGOUT_ACTION:
      return {
        email: null,
        accessToken: null,
      };
    default:
      return state;
  }
}

export default reducers;
