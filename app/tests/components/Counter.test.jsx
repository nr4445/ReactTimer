var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Counter = require('Counter');


describe('Counter', () => {
  it('Should exist', () => {
    expect(Counter).toExist();
  });

  describe('handleSetCounter', () => {
    it('Should set state to started and counter', (done) => {
      var counter = TestUtils.renderIntoDocument(<Counter/>);
      counter.handleSetCounter(10);

      expect(counter.state.count).toBe(10);
      expect(counter.state.counterStatus).toBe('started');

      setTimeout(() => {
        expect(counter.state.count).toBe(9);
        done();
      },1000)
    });

    it('Should never set counter to less than zero', (done) => {
      var counter = TestUtils.renderIntoDocument(<Counter/>);
      counter.handleSetCounter(1);


      setTimeout(() => {
        expect(counter.state.count).toBe(0);
        done();
      },3000)
    });

    it('should pause counter on paused status', (done) => {
      var counter = TestUtils.renderIntoDocument(<Counter/>);
      counter.handleSetCounter(3);
      counter.handleStatusChange('paused');

      setTimeout(() => {
        expect(counter.state.count).toBe(3);
        expect(counter.state.counterStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset count on stopped status', (done) => {
      var counter = TestUtils.renderIntoDocument(<Counter/>);
      counter.handleSetCounter(3);
      counter.handleStatusChange('stopped');

      setTimeout(() => {
        expect(counter.state.count).toBe(0);
        expect(counter.state.counterStatus).toBe('stopped');
        done();
      }, 1001);
    });


  });
});
