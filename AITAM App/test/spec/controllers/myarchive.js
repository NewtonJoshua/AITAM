'use strict';

describe('Controller: MyarchiveCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var MyarchiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyarchiveCtrl = $controller('MyarchiveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyarchiveCtrl.awesomeThings.length).toBe(3);
  });
});
