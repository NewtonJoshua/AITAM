'use strict';

describe('Controller: EditprojetCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var EditprojetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditprojetCtrl = $controller('EditprojetCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditprojetCtrl.awesomeThings.length).toBe(3);
  });
});
