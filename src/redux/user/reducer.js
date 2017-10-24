import {
  LOGIN_SUCCESS,
  LOGOUT,
} from './const';

const initialLoginUserState = {
  isLogged: false,
  data: {}
};

export default (state = initialLoginUserState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: action.payload.isLogged,
        user: action.payload.user,
      };
    case LOGOUT:
      return initialLoginUserState;
      break;
    default:
      return state;
  }
}
