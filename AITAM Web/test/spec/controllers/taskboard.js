'use strict';

describe('Controller: TaskboardCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var TaskboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskboardCtrl = $controller('TaskboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TaskboardCtrl.awesomeThings.length).toBe(3);
  });
});
