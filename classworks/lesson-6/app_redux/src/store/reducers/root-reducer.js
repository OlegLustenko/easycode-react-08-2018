import {combineReducers} from 'redux';

import {serversReducer} from './servers/servers-reducer';
import {historyReducer} from './history/history';

export const rootReducer = combineReducers({
  servers: serversReducer,
  history: historyReducer,
  ui: combineReducers({

  })
});
