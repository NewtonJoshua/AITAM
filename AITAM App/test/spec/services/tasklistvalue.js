'use strict';

describe('Service: taskListValue', function () {

  // load the service's module
  beforeEach(module('aitamApp'));

  // instantiate service
  var taskListValue;
  beforeEach(inject(function (_taskListValue_) {
    taskListValue = _taskListValue_;
  }));

  it('should do something', function () {
    expect(!!taskListValue).toBe(true);
  });

});
