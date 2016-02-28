'use strict';

describe('Controller: TimesheetCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var TimesheetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimesheetCtrl = $controller('TimesheetCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TimesheetCtrl.awesomeThings.length).toBe(3);
  });
});
