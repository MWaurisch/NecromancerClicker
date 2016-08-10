angular.module('enemyService', []).factory('enemyFactory', function() {

  var data = {
    enemyStatus: [{
      id: 0,
      name: 'Tribohm',
      army: [{
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
    },{
      id: 1,
      name: 'Vlostock',
      army: [{
        //Miliz
        count: 140,
      }, {
        //Bogenschütze
        count: 160,
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
    }, {
      id: 2,
      name: 'Ilmor',
      army: [{
        //Miliz
        count: 140,
      }, {
        //Bogenschütze
        count: 160,
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
    },],
  };

  return data;
});
