var React = require('react');

var Controls = React.createClass({
  propTypes:{
    counterStatus: React.PropTypes.string.isRequired
  },

  render: function () {
    var {counterStatus} = this.props;
    var renderStartStopButton = () => {
      if(counterStatus === 'started') {
        return <button className = "button secondary">Pause</button>
      }else if (counterStatus === 'paused') {
        return <button className = "button primary">Start</button>
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className = "button alert hallow">Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
