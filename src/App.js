import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/useState/ClassCounter';
import HooksCounter from './components/useState/HooksCounter';
import HooksCounter2 from './components/useState/HooksCounter2';
import HooksCounter3 from './components/useState/HooksCounter3';
import HooksCounter4 from './components/useState/HooksCounter4';
import ClassCounteruseEffect from './components/useEffect/ClassCounteruseEffect';
import HooksCounteruseEffect from './components/useEffect/HooksCounteruseEffect';
import ClassCounteruseEffectCdn from './components/useEffect/ClassCounteruseEffectCdn';
import HooksCounteruseEffectCdn from './components/useEffect/HooksCounteruseEffectCdn';
import ClassMouse from './components/Mouse/ClassMouse';
import HooksMouse from './components/Mouse/HooksMouse';
import MouseContainer from './components/Mouse/MouseContainer';
import ClassCounterInterval from './components/useEffect/ClassCounterInterval';
import HooksCounterInterval from './components/useEffect/HooksCounterInterval';
import DataFetching from './components/axiosfiles/DataFetching';
import DataFetchingTwo from './components/axiosfiles/DataFetchingTwo';
import DataFetchingThree from './components/axiosfiles/DataFetchingThree';
import ComponentC from './components/useContext/ComponentC';
import React, {useReducer } from 'react';
import HooksCounteruseReducer from './components/useReducer/HooksCounteruseReducer';
import HooksCounteruseReducertwo from './components/useReducer/HooksCounteruseReducertwo';
import HooksCounteruseReducerThree from './components/useReducer/HooksCounteruseReducerThree';
import UeWithUrA from './components/useContext+useReducer/UeWithUrA';
import UeWithUrB from './components/useContext+useReducer/UeWithUrB';
import UeWithUrC from './components/useContext+useReducer/UeWithUrC';
import DataFetchingOne from './components/DataFetching-using-useReducer/DataFetchingOne';
import DataFetchinguseRuseE from './components/DataFetching-using-useReducer/DataFetchinguseRuseE';
import Parent from './components/useCallback/Parent';
// import Counter from './components/useMemo/Counter';
import InputForm from './components/useRef/InputForm';
import ClassTimer from './components/useRef/ClassTimer';
import HooksTimer from './components/useRef/HooksTimer';
import DocTitleCounter from './components/CustomHooks/DocTitleCounter';
import Counter from './components/CustomHooks/Counter';

export const UserContext = React.createContext()  
export const ChannelContext = React.createContext()
//------------------------------------------------------
// Above code is for the ComponentE just useContext and below is for useContext+useReducer.
// -----------------------------------------------------
// -----------------------------------------------------
export const CountContext = React.createContext()

// const initialState = 0;

// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         case 'reset':
//             return initialState
    
//         default:
//             return state
//     }
// }


function App() {

  // const [count, dispatch] = useReducer(reducer, initialState)


  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter> */}

      {/* <HooksCounter></HooksCounter> */}

      {/* <HooksCounter2></HooksCounter2> */}
      
      {/* <HooksCounter3></HooksCounter3>     */}

      {/* <HooksCounter4></HooksCounter4> */}

      {/* <ClassCounteruseEffect></ClassCounteruseEffect> */}

      {/* <HooksCounteruseEffect></HooksCounteruseEffect> */}

      {/* <ClassCounteruseEffectCdn></ClassCounteruseEffectCdn> */}

      {/* <HooksCounteruseEffectCdn></HooksCounteruseEffectCdn> */}

      {/* <ClassMouse></ClassMouse> */}

      {/* <HooksMouse></HooksMouse> */}

      {/* <MouseContainer></MouseContainer> */}

      {/* <ClassCounterInterval></ClassCounterInterval> */}

      {/* <HooksCounterInterval></HooksCounterInterval> */}

      {/* <DataFetchingTwo></DataFetchingTwo> */}

      {/* <DataFetchingThree></DataFetchingThree> */}

      {/* <UserContext.Provider value={'Syed'}>
        <ChannelContext.Provider value={'Youtube Channel'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <HooksCounteruseReducer></HooksCounteruseReducer> */}

      {/* <HooksCounteruseReducertwo></HooksCounteruseReducertwo> */}

      {/* <HooksCounteruseReducerThree></HooksCounteruseReducerThree> */}

      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
          Count - {count}
        <UeWithUrA/>
        <UeWithUrB/>
        <UeWithUrC/>
        </div>

      </CountContext.Provider> */}

      {/* <DataFetchingOne></DataFetchingOne> */}

      {/* <DataFetchinguseRuseE></DataFetchinguseRuseE> */}

      {/* <Parent></Parent> */}

      {/* <Counter></Counter> */}

      {/* <InputForm></InputForm> */}

      {/* <ClassTimer></ClassTimer> */}

      {/* <HooksTimer></HooksTimer> */}

      {/* <DocTitleCounter></DocTitleCounter> */}

      <Counter></Counter>
    </div>

  );
}

export default App;
