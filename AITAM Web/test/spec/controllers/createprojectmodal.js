'use strict';

describe('Controller: CreateprojectmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var CreateprojectmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateprojectmodalCtrl = $controller('CreateprojectmodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateprojectmodalCtrl.awesomeThings.length).toBe(3);
  });
});
