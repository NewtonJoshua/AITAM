'use strict';

describe('Controller: MytasksCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var MytasksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MytasksCtrl = $controller('MytasksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MytasksCtrl.awesomeThings.length).toBe(3);
  });
});
