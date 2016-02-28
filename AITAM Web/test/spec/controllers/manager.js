'use strict';

describe('Controller: ManagerCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var ManagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagerCtrl = $controller('ManagerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManagerCtrl.awesomeThings.length).toBe(3);
  });
});
