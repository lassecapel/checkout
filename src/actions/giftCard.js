import type Action from './types'

export function setgiftWrapMessage(message: string) : Action {
  return {
    type: 'SET_MESSAGE',
    message
  }
}

export function togglegiftWrap() : Action {
  return {
    type: 'TOGGLE',
  }
}
