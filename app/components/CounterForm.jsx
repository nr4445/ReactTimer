var React = require('react');

var CounterForm = React.createClass({

  onSubmit: function (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    console.log('input count', $('input').length);
    //reg exp checking
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCounter(parseInt(strSeconds, 10));
    }else {
      alert('Pleae enter valid no of seconds');
      this.refs.seconds.value = '';
    }
  },

  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className= "counter-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CounterForm;
