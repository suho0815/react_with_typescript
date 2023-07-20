import * as T from './type'

const initialState: T.State = 0

export const reducer = (state:T.State = initialState, action:T.Actions) => {
  switch(action.type){
    case '@counter/setCounter':
      return state + action.payload
  }
  
  return state
}