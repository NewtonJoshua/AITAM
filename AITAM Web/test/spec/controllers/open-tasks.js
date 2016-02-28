'use strict';

describe('Controller: OpenTasksCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var OpenTasksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpenTasksCtrl = $controller('OpenTasksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OpenTasksCtrl.awesomeThings.length).toBe(3);
  });
});
