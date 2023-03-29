import { useReducer } from 'react';
import {
  ADD_USER,
  LOGIN
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {

    case ADD_USER:
      return {
        ...state
      }
    case LOGIN: 
    return {
      ...state
    }




    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
