'use strict';

describe('Controller: HolidaysCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var HolidaysCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HolidaysCtrl = $controller('HolidaysCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HolidaysCtrl.awesomeThings.length).toBe(3);
  });
});
