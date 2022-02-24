import { createContext, useReducer } from 'react';
import './App.css';
import ComplexCounter from './Components/ComplexCounter';
import ComponentA from './Components/ComponentA';
import Counter from './Components/Counter';
import CounterThree from './Components/CounterThree';
import GetPost from './Components/GetPost';
import GetPost2 from './Components/GetPost2';


export const counterContext = createContext();


const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
      <Counter/>
        <div>Count : {count}</div>
        <counterContext.Provider value={{countDispatch: dispatch}}>
        <ComponentA/>
        </counterContext.Provider>
        <CounterThree/>
        <ComplexCounter/>
        <GetPost/>
        <GetPost2/>
      </header>
    </div>
  );
}

export default App;
