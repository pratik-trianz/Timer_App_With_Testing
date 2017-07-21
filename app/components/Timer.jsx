var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  render : function () {
    var {Count, timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={Count}/>
        <Controls CountdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
})

module.exports = Timer;
