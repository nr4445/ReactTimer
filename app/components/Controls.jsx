var React = require('react');

var Controls = React.createClass({
  propTypes:{
    counterStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render: function () {
    var {counterStatus} = this.props;
    var renderStartStopButton = () => {
      if(counterStatus === 'started') {
        return <button className = "button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      }else if (counterStatus === 'paused') {
        return <button className = "button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className = "button alert hallow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
