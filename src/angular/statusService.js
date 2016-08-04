angular.module('statusService', []).factory('statusFactory', function() {

  var data ={

    // status of mana //
    playerStatus : {
        mana: 120,
        manapersecond: 0,
        manaperclick: 1,
    },

    // status of purchased lich upgrades //
    lichStatus : [{
        //Lebenskraft
        id: 0,
        level: 0,
        cost: 15,
    }, {
        //Konzentration
        id: 1,
        level: 0,
        cost: 50,
    }, {
        //Manafluss
        id: 2,
        level: 0,
        cost: 60,
    }, {
        //Meditation
        id: 3,
        level: 0,
        cost: 200,
    }, {
        //unheilige Kraft
        id: 4,
        level: 0,
        cost: 240,
    }, {
        //Manapool
        id: 5,
        level: 0,
        cost: 800,
    }, {
        //Lebensdiebstahl
        id: 6,
        level: 0,
        cost: 960,
    }, {
        //Runen
        id: 7,
        level: 0,
        cost: 3200,
    }, {
        //Spektralenergie
        id: 8,
        level: 0,
        cost: 3860,
    }, {
        //Spektralübergang
        id: 9,
        level: 0,
        cost: 12800,
    }, ],

    // status of summoned necromancy creatures //
    necromancyStatus : [{
        //Skelettkrieger
        id: 0,
        count: 10,
    }, {
        //Skelettschütze
        id: 1,
        count: 5,
    }, {
        //Zombie
        id: 2,
        count: 0,
    }, {
        //Gespenst
        id: 3,
        count: 0,
    }, {
        //Todesritter
        id: 4,
        count: 0,
    }, {
        //Skelettgigant
        id: 5,
        count: 0,
    }, {
        //Ghoul
        id: 6,
        count: 0,
    }, ],

    // status of build buildings //
    strongholdStatus : [{
      //Friedhof
      id: 0,
      level: 1,
      cost: 500,
    }, {
      //Schmiede
      id: 1,
      level: 1,
      cost: 500,
    }, {
      //Kaserne
      id: 2,
      level: 1,
      cost: 500,
    }, {
      //Ställe
      id: 3,
      level: 0,
      cost: 2000,
    }, {
      //Burg
      id: 4,
      level: 0,
      cost: 4000,
    }, {
      //Nekroverstärker
      id: 5,
      level: 0,
      cost: 1500,
    }, {
      //Geisterportal
      id: 6,
      level: 0,
      cost: 5500,
    }, {
      //Ritualkreis
      id: 7,
      level: 0,
      cost: 7000,
    }, ],

    // status of selected creatures for attack //
    armyStatus : [{
      //Skelettkrieger
      count: 0,
    }, {
      //Skelettschütze
      count: 0,
    }, {
      //Zombie
      count: 0,
    }, {
      //Gespenst
      count: 0,
    }, {
      //Todesritter
      count: 0,
    }, {
      //Skelettgigant
      count: 0,
    }, {
      //Ghoul
      count: 0,
    }, ],
  };

  return data;
});
