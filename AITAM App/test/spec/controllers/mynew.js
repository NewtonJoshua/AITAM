'use strict';

describe('Controller: MynewCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var MynewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MynewCtrl = $controller('MynewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MynewCtrl.awesomeThings.length).toBe(3);
  });
});
