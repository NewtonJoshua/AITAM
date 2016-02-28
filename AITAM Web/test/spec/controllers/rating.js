'use strict';

describe('Controller: RatingCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var RatingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RatingCtrl = $controller('RatingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RatingCtrl.awesomeThings.length).toBe(3);
  });
});
