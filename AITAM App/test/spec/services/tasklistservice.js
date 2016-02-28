'use strict';

describe('Service: taskListService', function () {

  // load the service's module
  beforeEach(module('aitamApp'));

  // instantiate service
  var taskListService;
  beforeEach(inject(function (_taskListService_) {
    taskListService = _taskListService_;
  }));

  it('should do something', function () {
    expect(!!taskListService).toBe(true);
  });

});
