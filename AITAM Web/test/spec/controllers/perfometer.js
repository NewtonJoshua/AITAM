'use strict';

describe('Controller: PerfometerCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var PerfometerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerfometerCtrl = $controller('PerfometerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PerfometerCtrl.awesomeThings.length).toBe(3);
  });
});
