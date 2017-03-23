var React = require('react');
var Clock = require('Clock');
var CounterForm = require('CounterForm');

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
      }
    }
  },

  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    },1000);
  },

  handleSetCounter: function (seconds) {
    this.setState ({
      count: seconds,
      counterStatus: 'started'
    });
  },

  render: function() {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CounterForm onSetCounter={this.handleSetCounter}/>
      </div>
    );
  }
});

module.exports  = Counter;
