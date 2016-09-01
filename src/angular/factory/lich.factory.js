(function() {
  'use strict';

  angular
    .module('NecroClicker')
    .factory('LichFactory', LichFactory);

    function LichFactory(){

      var lichStatus = [{
        name: "Lebenskraft",
        id: 0,
        level: 0,
        cost: 15,
        clicker: false,
        manapersecond: 0.1,
      }, {
        name: "Konzentration",
        id: 1,
        level: 0,
        cost: 50,
        clicker: true,
        manaperclick: 0.3,
      }, {
        name: "Manafluss",
        id: 2,
        level: 0,
        cost: 60,
        clicker: false,
        manapersecond: 0.5,
      }, {
        name: "Meditation",
        id: 3,
        level: 0,
        cost: 200,
        clicker: true,
        manaperclick: 0.7,
      }, {
        name: "unheilige Kraft",
        id: 4,
        level: 0,
        cost: 240,
        clicker: false,
        manapersecond: 1.2,
      }, {
        name: "Manapool",
        id: 5,
        level: 0,
        cost: 800,
        level: 0,
        clicker: true,
        manaperclick: 1.2,
      }, {
        name: "Lebensdiebstahl",
        id: 6,
        level: 0,
        cost: 960,
        clicker: false,
        manapersecond: 2.8,
      }, {
        name: "Runen",
        id: 7,
        level: 0,
        cost: 3200,
        clicker: true,
        manaperclick: 1.8,
      }, {
        name: "Spektralenergie",
        id: 8,
        level: 0,
        cost: 3860,
        clicker: false,
        manapersecond: 6,
      }, {
        name: "Spektralübergang",
        id: 9,
        level: 0,
        cost: 12800,
        clicker: true,
        manaperclick: 2.5,
      }];

      var factory = {
        lichStatus: lichStatus,
        increaseUpgradeLevel: increaseUpgradeLevel,
        increaseUpgradeCost: increaseUpgradeCost,
      };

      return factory;

      ////////////////////////////////////////////
      ///////////////// functions ////////////////
      ////////////////////////////////////////////

      function increaseUpgradeLevel(id, value){
        lichStatus[id].level += value;
      };

      function increaseUpgradeCost(id, value){
        if (lichStatus[id].clicker) {
          lichStatus[id].cost += Math.round(lichStatus[id].cost * 0.25);
        }
        else {
          lichStatus[id].cost += Math.round(lichStatus[id].cost * 0.15);
        }
      };
    };

})();
