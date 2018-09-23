import {GET_USERS} from '../../actions/get-users';

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS: {
      return [
        ...state,
        ...action.payload.users,
      ]
    }
    default: {
      return state;
    }
  }
};
