import React from 'react';
import {INCREASE , DECREASE , RESET} from './actions';
export default function reducer(state , action){
    // console.log(state , action)
    
      // state.count = state.count - 1;
      // return state;
  
      // return {...state , count: state.count - 1}
  
      switch(action.type){
        case DECREASE:
          return {...state , count: state.count - 1};
        case INCREASE:
          return {...state , count: state.count + 1};
        case RESET:
          return {...state , count: 0};
  
        default:
          return state;
      }
  
    
    return state;
  }