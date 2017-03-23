var React = require('react');
var Clock = require('Clock');
var CounterForm = require('CounterForm');
var Controls = require('Controls');

var Counter = React.createClass({

  getInitialState: function () {
    return {
      count: 0,
      counterStatus: 'stopped'
    };
  },

  componentDidUpdate: function (prevProps, prevState) {
    if(this.state.counterStatus !== prevState.counterStatus) {
      switch (this.state.counterStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  // /*
  //   componentWillMount gets fired as your component first gets mounted,
  //   meaning if a component gets rendered to screen, componentWillMount life cycle method gets called just before it gets shown to the screen
  //   this means you dont have access to refs or DOM , so if you want want make any changes to the value of an input fields or
  //   fetch values you can't do that in componentWillMount
  // */
  // componentWillMount: function () {
  //   console.log('componentWillMount');
  // },
  // /*
  //   componentDidMount gets fired right after everythign gets rendedred into DOM
  //   you are gonna have access to any refs if you wanna do any updating
  // */
  // componentDidMount: function () {
  //   console.log('componentDidMount');
  // },

  /*this function gets fired by the react right before the component gets removed from DOM,
   meaning its visually removed in browser.
   */
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;

  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount === 0) {
        this.setState({counterStatus: 'stopped'});
      }
    },1000);
  },

  handleSetCounter: function (seconds) {
    this.setState ({
      count: seconds,
      counterStatus: 'started'
    });
  },

  handleStatusChange: function(newStatus) {
      this.setState({counterStatus: newStatus});
  },

  render: function() {
    var {count, counterStatus} = this.state;
    var renderControlArea = () => {
      if(counterStatus !== 'stopped') {
        return <Controls counterStatus={counterStatus} onStatusChange={this.handleStatusChange}/>
      }else{
        return <CounterForm onSetCounter={this.handleSetCounter}/>
      }
    };
    return (
      <div>
        <h1 className="page-title">Counter App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports  = Counter;
