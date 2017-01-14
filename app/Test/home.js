'use strict';

describe('myApp.home module', function() {

  beforeEach(module('myApp.home'));

  describe('home controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var home_Controller = $controller('homeController');
      expect(home_Controller).toBeDefined();
    }));

  });
});
