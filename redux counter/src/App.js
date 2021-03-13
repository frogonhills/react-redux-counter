import React from "react";
import {createStore} from 'redux'
import Counter from "./Counter";
// import {INCREASE , DECREASE , RESET} from './components/actions';
import reducer from './components/reducers';
import {Provider} from 'react-redux';
//setup initial state

const defaultState = {
  count: 7,
  name: 'bob'
};









// sertup store 
const store = createStore(reducer , defaultState);

// store.dispatch({type: "DECREASE"});
// store.dispatch({type: "INCREASE"});
// store.dispatch({type: "RESET"});
// console.log(store.getState());



const App = () => {
  return(
    <Provider store={store}>

      <Counter  />;

    </Provider>
  );
};

export default App;
