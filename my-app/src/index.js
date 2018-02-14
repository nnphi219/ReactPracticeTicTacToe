import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


import App from './App';
import TicTacToe from './TicTacToe/TicTacToe';
import DemoComponent from './Components/DemoComponent';
import Toggle from './HandlingEvents/Toggle';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';
import ListsAndKeys from './ListsAndKeys/ListsAndKeys';
import DemoForms from './Forms/Forms';
import Calculator from './BoilingVerdict/BoilingVerdict';
import Composition_Inheritance from './Composition_Inheritance/Composition_Inheritance';
import Thinking_In_React_Myself from './Thinking_In_React/Thinking_In_React_Myself';
import Thinking_In_React from './Thinking_In_React/Thinking_In_React';

import jsx_in_depth from './Advanced_Guides/JSX_In_Depth/jsx_in_depth';
import TypeCheckingWithPros from './Advanced_Guides/TypeCheckingWithPros';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<TicTacToe />, document.getElementById('root'));
registerServiceWorker();

// ============================create element
// const element1 = (
//     <h1 className="greeting">
//       This is example render use variable
//     </h1>
//   );

//   const element2 = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'This is example for React.createElement()'
//   );

// ReactDOM.render(
//     element1,
//     document.getElementById('root')
//   );



// ======================= set interval 

// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>
//           It is{' '}
//           {new Date().toLocaleTimeString()}.
//         </h2>
//       </div>
//     );
//     ReactDOM.render(
//       element,
//       document.getElementById('root')
//     );
//   }
  
//   setInterval(tick, 1000);


// =============================== Component and Props
// const element = <DemoComponent name="Sara" age="25" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// ================================ Handling Events
// ReactDOM.render(
//   <Toggle />, document.getElementById('root')
// );


// ================================ Conditional rendering

// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <ConditionalRendering isLoggedIn={false} />,
//   document.getElementById('root')
// );


// ================================== Lists and Keys

// ReactDOM.render(
//   <ListsAndKeys />,
//   document.getElementById('root')
// );


// =================================== Forms

// ReactDOM.render(
//   <DemoForms />,
//   document.getElementById('root')
// );


// ==================================== Lifting State Up

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );


// ===================================== Composition_Inheritance

// ReactDOM.render(
//   <Composition_Inheritance />,
//   document.getElementById('root')
// );


// ===================================== Thinking in react

// ReactDOM.render(
//   // <Thinking_In_React_Myself />,
//   <div>
//     <Thinking_In_React_Myself />
//     <Thinking_In_React />
//   </div>,
//   document.getElementById('root')
// );


// =========================================================== Advanced Guides ============================

// ================ JSX in depth

// ReactDOM.render(
//   <jsx_in_depth />,
//   document.getElementById('root')
// );

// ================ Type Checking

ReactDOM.render(
  <TypeCheckingWithPros />,
  document.getElementById('root')
);
