'use strict';

describe('Controller: ProjetCategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('aitamApp'));

  var ProjetCategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjetCategoryCtrl = $controller('ProjetCategoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjetCategoryCtrl.awesomeThings.length).toBe(3);
  });
});
