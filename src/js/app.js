// var React     = require('react'),
//     ReactDOM  = require('react-dom');

// var Hello = React.createClass({
//               render: function() {
//                 return (
//                   <h1>Hi, React!</h1>
//                 )
//               }
//             });

// ReactDOM.render(
//   <Hello />,
//   document.getElementById('app')
// );

//////////////////////////////////////////

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import Layout from './component/Layout';
// import HomePage from './component/page/Home';
// import FooPage from './component/page/Foo';
// import BarPage from './component/page/Bar';
// import BazPage from './component/page/Baz';

// class Hello extends React.Component
// {
//   render()
//   {
//     return (
//       <h1>Hello, React!</h1>
//     );
//   }
// }

// class Application extends React.Component
// {
//   render()
//   {
//     return (
//       <Router history = {browserHistory}>
//         <Route path = "/" component = {Layout}>
//           <IndexRoute component = {HomePage} />
//           <Route path = "foo" name = "foo" component = {FooPage} />
//           <Route path = "bar" name = "bar" component = {BarPage} />
//           <Route path = "baz" name = "baz" component = {BazPage} />
//         </Route>
//         <Route path = "/:color" component = {Layout}>
//           <IndexRoute component = {HomePage} />
//           <Route path = "foo" name = "foo" component = {FooPage} />
//           <Route path = "bar" name = "bar" component = {BarPage} />
//           <Route path = "baz" name = "baz" component = {BazPage} />
//         </Route>
//       </Router>
//     );
//   }
// }

// ReactDOM.render(
//   <Application />,
//   document.getElementById('app')
// );

//////////////////////////////////////////

import { createStore } from 'redux';

const reducer = function(state, action)
{
  switch (action.type)
  {
    case 'INC': return state + action.amount;
    case 'DEC': return state - action.amount;
  }

  return state;
};

const store = createStore(reducer, 0);

store.subscribe
(
  () =>
  {
    console.log('Store changed', store.getState());
  }
);

store.dispatch({type: 'INC', amount: 1});
store.dispatch({type: 'INC', amount: 5});
store.dispatch({type: 'INC', amount: 400});
store.dispatch({type: 'INC', amount: 2330});
store.dispatch({type: 'DEC', amount: 1000});
store.dispatch({type: 'DEC', amount: 5024});
