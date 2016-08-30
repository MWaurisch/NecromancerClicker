(function() {
  'use strict';

  angular
    .module('NecroClicker')
    .factory('ManaFactory', ManaFactory);

    function ManaFactory() {

      // status of player mana and mana generation //
      var manaStatus = {
        amount: 0,
        targetamount: 5000,
        duration: 1000,
        manaPerClick: 1,
        manaPerSecond: 0,
      };

      var factory = {
        // player status //
        manaStatus: manaStatus,
        // function to manipulate player status //
        getManaPerClick: getManaPerClick,
        getManaPerSecond: getManaPerSecond,
        decreaseManaAmount: decreaseManaAmount,
        increaseManaPerClick: increaseManaPerClick,
        increaseManaPerSecond: increaseManaPerSecond,
      };

      return factory;

      ////////////////////////////////////////////
      ///////////////// functions ////////////////
      ////////////////////////////////////////////

      function getManaPerClick(){
        manaStatus.amount += manaStatus.manaPerClick;
        manaStatus.targetamount += manaStatus.manaPerClick;
      };

      function getManaPerSecond(){
        manaStatus.amount = manaStatus.targetamount;
        manaStatus.targetamount += manaStatus.manaPerSecond;
      };

      function decreaseManaAmount(value){
        manaStatus.amount = manaStatus.targetamount;
        manaStatus.targetamount -= value;
      };

      function increaseManaPerClick(value){
        manaStatus.manaPerClick += value;
      };

      function increaseManaPerSecond(value){
        manaStatus.manaPerSecond += value;
      };

    };

})();
