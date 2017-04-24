'use strict';

describe('myApp.projects module', function() {

  beforeEach(module('myApp.projects'));

  describe('projects controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var projects2Ctrl = $controller('ProjectsCtrl');
      expect(projects2Ctrl).toBeDefined();
    }));

  });
});