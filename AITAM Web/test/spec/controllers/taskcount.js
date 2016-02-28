'use strict';

describe('Controller: TaskcountCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var TaskcountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskcountCtrl = $controller('TaskcountCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TaskcountCtrl.awesomeThings.length).toBe(3);
  });
});
