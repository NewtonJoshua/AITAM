'use strict';

describe('Controller: MyTasksCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var MyTasksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyTasksCtrl = $controller('MyTasksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyTasksCtrl.awesomeThings.length).toBe(3);
  });
});
