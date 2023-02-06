import React from 'react';
import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import { increase,decrease,reset } from './features/counter/counterSlice';

function App() {
  const {count} = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <span>Count : {count}</span><br />
      <button onClick={() => dispatch(increase('hi'))}>Increase</button>
      <button onClick={() => dispatch(decrease({id : '12'}))}>Decrease</button>
      <button onClick={() =>dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
