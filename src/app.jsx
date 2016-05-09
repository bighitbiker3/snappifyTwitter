var React = require('react');
var ReactDOM = require('react-dom');


var Hello = React.createClass({
  render: function() {
    return <div>
      <h1>My MERN Template :)</h1>
    </div>

  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.app'));
