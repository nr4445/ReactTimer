var React = require('react');

var CounterForm = React.createClass({

  onSubmit: function (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    //reg exp checking
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCounter(parseInt(strSeconds, 10));
    }
  },

  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className= "counter-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <buton className="button expanded">Start</buton>
        </form>
      </div>
    );
  }
});

module.exports = CounterForm;
