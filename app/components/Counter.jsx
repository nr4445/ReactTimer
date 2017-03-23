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
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports  = Counter;
