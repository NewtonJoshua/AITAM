'use strict';

describe('Controller: ArchivedTaskCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var ArchivedTaskCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArchivedTaskCtrl = $controller('ArchivedTaskCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArchivedTaskCtrl.awesomeThings.length).toBe(3);
  });
});
