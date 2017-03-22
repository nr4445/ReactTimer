var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var CounterForm = require('CounterForm');

describe('CounterForm', () => {
  it('Should exists', () => {
    expect(CounterForm).toExist();
  });

  it('Should call onSetCounter if valid seconds entered', () => {
    var spy = expect.createSpy();
    var counterForm = TestUtils.renderIntoDocument(<CounterForm onSetCounter={spy}/>);
    var $el = $(ReactDOM.findDOMNode(counterForm));

    counterForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);

  });

  it('should not call onSetCounter if invalid seconds entered', () => {
    var spy = expect.createSpy();
    var counterForm = TestUtils.renderIntoDocument(<CounterForm onSetCounter={spy}/>);
    var $el = $(ReactDOM.findDOMNode(counterForm));

    counterForm.refs.seconds.value = 'ab445';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
