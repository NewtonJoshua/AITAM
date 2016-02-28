'use strict';

describe('Controller: ReviewTasksCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var ReviewTasksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReviewTasksCtrl = $controller('ReviewTasksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReviewTasksCtrl.awesomeThings.length).toBe(3);
  });
});
