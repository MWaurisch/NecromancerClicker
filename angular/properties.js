'use strict';

var properties = angular.module('gameProperties' []);

properties.service('propertyService', function($scope) {
    var test = {
      text: 'Im a test',
      plus: 2,
    }

    getTest = function() {
      return test;
    };
});
