import {createSelector} from 'reselect';

import {selectFilterText} from './select-filter-text';

export const selectFilteredUsers = createSelector(
  [selectFilterText, (state) => state.users],
  (filteredText, users) => {
    return users.filter(user => user.name.includes(filteredText));
  },
);