export const historyReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_HISTORY': {
      return [...state, action.payload.historyAction];
    }
    default: {
      return state;
    }
  }
};