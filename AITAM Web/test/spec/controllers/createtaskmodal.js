'use strict';

describe('Controller: CreatetaskmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var CreatetaskmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatetaskmodalCtrl = $controller('CreatetaskmodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreatetaskmodalCtrl.awesomeThings.length).toBe(3);
  });
});
