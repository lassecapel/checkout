
/*
* Bol.com
* @flow
*/

'use strict';

import type {Action} from '../actions/types';

type State = {
  enabled: boolean
};

function giftWrap(state: State = { enabled: false }, action : Action): State {
  if (action.type === 'TOGGLE') {
    return {...state, enabled: !state.enabled }
  }
  if (action.type === 'SET_MESSAGE') {
    return {...state, message: action.message }
  }
  return state;
};

export default giftWrap;

// 'use strict';
//
// import type {Action} from '../actions/types';
//
// export type FriendFilter = {
//   id: string;
//   name: string;
//   schedule: {[key: string]: boolean};
// };
//
// export type TopicsFilter = {
//   [key: string]: boolean;
// };
//
// type State = TopicsFilter;
//
// function filter(state: State = {}, action: Action): State {
//   if (action.type === 'APPLY_TOPICS_FILTER') {
//     return action.topics;
//   }
//   if (action.type === 'CLEAR_FILTER') {
//     return {};
//   }
//   return state;
// }
//
// module.exports = filter;
