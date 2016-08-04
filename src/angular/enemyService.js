angular.module('enemyService', []).factory('enemyFactory', function() {

  var data = [{
    id: 0,
    name: 'Tribohm',
    status: [{
      //Miliz
      count: 100,
    }, {
      //Bogenschütze
      count: 75,
    }, {
      //Soldat
      count: 200,
    }, {
      //Golem
      count: 150,
    }, {
      //Ritter
      count: 45,
    }, {
      //Magier
      count: 25,
    }, {
      //Koloss
      count: 10,
    }, ],
  }];

  return data;
});
