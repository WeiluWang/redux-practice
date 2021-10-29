import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  let counter = useSelector(state => state.counter);
  let isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch()
  return (
    <div className="App">
      
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>12312312</h3>: ''}
    </div>
  );
}

export default App;
