'use strict';

describe('Controller: OurtasksCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var OurtasksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OurtasksCtrl = $controller('OurtasksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OurtasksCtrl.awesomeThings.length).toBe(3);
  });
});
