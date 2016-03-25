'use strict';

describe('Controller: DeletetaskcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var DeletetaskcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeletetaskcontrollerCtrl = $controller('DeletetaskcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeletetaskcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
