'use strict';

describe('Controller: TaskCategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var TaskCategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskCategoryCtrl = $controller('TaskCategoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TaskCategoryCtrl.awesomeThings.length).toBe(3);
  });
});
