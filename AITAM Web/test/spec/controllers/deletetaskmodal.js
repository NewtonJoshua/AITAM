'use strict';

describe('Controller: DeletetaskmodalctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var DeletetaskmodalctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeletetaskmodalctrlCtrl = $controller('DeletetaskmodalctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeletetaskmodalctrlCtrl.awesomeThings.length).toBe(3);
  });
});
