import {ADD_SERVER} from '../../actions/servers-actions/add-server';

const initialState = [
  {
    name: 'Server #1',
  },
  {
    name: 'Server #2',
  },
];

export const serversReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVER: {
      // return state.push(action.payload.server)
      // return state.concat(action.payload.server);
      return [...state, action.payload.server];
    }
    default: {
      return state;
    }
  }
};
