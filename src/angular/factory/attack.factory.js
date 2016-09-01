(function(){
  'use strict';

  angular
    .module('NecroClicker')
    .factory('AttackFactory', AttackFactory);

    function AttackFactory(){

      var attackStatus = [{
          //Skelettkrieger
          id: 0,
          amount: 0,
        }, {
          //Skelettschütze
          id: 1,
          amount: 0,
        }, {
          //Zombie
          id: 2,
          amount: 0,
        }, {
          //Gespenst
          id: 3,
          amount: 0,
        }, {
          //Todesritter
          id: 4,
          amount: 0,
        }, {
          //Skelettgigant
          id: 5,
          amount: 0,
        }, {
          //Ghoul
          id: 6,
          amount: 0,
        }];

      var factory = {
        attackStatus: attackStatus,
        increaseAmount: increaseAmount,
        decreaseAmount: decreaseAmount,
      };

      return factory;

      ////////////////////////////////////////////
      ///////////////// functions ////////////////
      ////////////////////////////////////////////

      function increaseAmount(id, value){
        attackStatus[id].amount += value;
      };

      function decreaseAmount(id, value){
        attackStatus[id].amount -= value;
      };

    };

})();
