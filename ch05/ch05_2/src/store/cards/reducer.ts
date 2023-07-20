import * as T from './type'

const initialState: T.State = []

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@cards/addCard':
      return [...state, action.payload]
    case '@cards/removeCard':
      return state.filter(card => card.uuid !== action.payload)
  }
  return state
}
