/*
* Bol.com
* @flow
*/

'use strict';

import type {Action} from '../actions/types';

type State = {
  enabled: boolean,
  message: string,
  giftWrapOptions: Array<Object>
};
type GiftWrapOption = {
  id: number,
  description: string,
  price: number
}

const giftWrapOptions: Array<GiftWrapOption> = [
  {id: 1, description: 'blauwe ballen', price: 1.99, },
  {id: 2, description: 'feest', price: 1.99}
];

function giftWrap(state: State = { enabled: false, message: '', giftWrapOptions: giftWrapOptions, selectedGiftwrapId: number}, action: Action){
  if (action.type === 'SET_MESSAGE') {
    return {...state, message: action.message }
  }

  if (action.type === 'SELECT_GIFTWRAP') {
    return {
      ...state,
      giftWrapOptions: state.giftWrapOptions.map((giftWrapOption: GiftWrapOption, index: number) => {
        return {
          ...giftWrapOption,
          selected: index === action.id
        }
      })
    }
  }

  return state;
};

export default giftWrap;
