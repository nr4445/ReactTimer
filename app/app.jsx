var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Counter = require('Counter');


//Load foundation library
require('style!css!foundation-sites/dist/foundation.min.css')//to style these html we need embed the chain with style loader
//firup foundation
$(document).foundation();

//App css
require('!style!css!sass!applicationStyles')

//common DOM method
ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="counter" component={Counter}/>
    <IndexRoute component={Timer}/>
  </Route>
</Router>,
document.getElementById('app')
);
