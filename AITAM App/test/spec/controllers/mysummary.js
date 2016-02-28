'use strict';

describe('Controller: MysummaryCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var MysummaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MysummaryCtrl = $controller('MysummaryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MysummaryCtrl.awesomeThings.length).toBe(3);
  });
});
