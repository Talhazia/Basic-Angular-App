'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /home default', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });


    it('should render home.html when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for home/);
    });

  });


  describe('dataList', function() {

    beforeEach(function() {
      browser.get('index.html#/dataList');
    });


    it('should render dataList.html when user navigates to /dataList', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for dataList/);
    });

  });

    describe('details', function() {

    beforeEach(function() {
      browser.get('index.html#/details');
    });


    it('should render details.html when user navigates to /details', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for details/);
    });

  });
});
