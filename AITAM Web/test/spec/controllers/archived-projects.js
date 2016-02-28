'use strict';

describe('Controller: ArchivedProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var ArchivedProjectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArchivedProjectsCtrl = $controller('ArchivedProjectsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArchivedProjectsCtrl.awesomeThings.length).toBe(3);
  });
});
