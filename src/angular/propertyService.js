angular.module('propertyService', []).factory('propertyFactory', function() {

  const data = {

    // properties of lich upgrades to generate Mana //
    updateProperties : [{
        clicker: false,
        manapersecond: 0.1,
        name: "Lebenskraft",
    }, {
        clicker: true,
        manaperclick: 0.3,
        name: "Konzentration",
    }, {
        clicker: false,
        manapersecond: 0.5,
        name: "Manafluss",
    }, {
        clicker: true,
        manaperclick: 0.7,
        name: "Meditation",
    }, {
        clicker: false,
        manapersecond: 1.2,
        name: "unheilige Kraft",
    }, {
        level: 0,
        clicker: true,
        manaperclick: 1.2,
        name: "Manapool",
    }, {
        clicker: false,
        manapersecond: 2.8,
        name: "Lebensdiebstahl",
    }, {
        clicker: true,
        manaperclick: 1.8,
        name: "Runen",
    }, {
        clicker: false,
        manapersecond: 6,
        name: "Spektralenergie",
    }, {
        clicker: true,
        manaperclick: 2.5,
        name: "Spektralübergang",
    }, ],

    // properties of necromancy creatures to summon //
    undeadProperties : [{
        name: "Skelettkrieger",
        attack: 5,
        defence: 4,
        damage: 2,
        lifepoints: 6,
        speed: 4,
        cost: 60,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [1,1,1,0,0,0,0,0],
    }, {
        name: "Skelettschütze",
        attack: 6,
        defence: 2,
        damage: 3,
        lifepoints: 6,
        speed: 5,
        cost: 100,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [2,2,2,0,0,0,0,0],
    }, {
        name: "Zombie",
        attack: 7,
        defence: 7,
        damage: 4,
        lifepoints: 20,
        speed: 3,
        cost: 200,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,2,2,0,0,1,0,0],
    }, {
        name: "Gespenst",
        attack: 10,
        defence: 9,
        damage: 7,
        lifepoints: 40,
        speed: 7,
        cost: 360,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,2,2,0,0,2,1,0],
    }, {
        name: "Todesritter",
        attack: 13,
        defence: 10,
        damage: 13,
        lifepoints: 60,
        speed: 9,
        cost: 600,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,3,3,1,0,3,2,0],
    }, {
        name: "Skelettgigant",
        attack: 17,
        defence: 15,
        damage: 22,
        lifepoints: 120,
        speed: 6,
        cost: 1200,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,4,4,0,0,4,2,1],
    }, {
        name: "Ghoul",
        attack: 24,
        defence: 24,
        damage: 50,
        lifepoints: 200,
        speed: 10,
        cost: 2300,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,2,2,0,0,5,2,2],
    }, ],

    // properties of buildings to fullfile requirements for creatures //
    buildingProperties : [{
        name: "Friedhof",
        max: 3,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [0,0,0,0,0,0,0,0],
    }, {
        name: "Schmiede",
        max: 4,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [1,0,0,0,0,0,0,0],
    }, {
        name: "Kaserne",
        max: 4,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [1,1,0,0,0,0,0,0],
    }, {
        name: "Ställe",
        max: 1,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,3,3,0,1,0,0,0],
    }, {
        name: "Burg",
        max: 3,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [2,2,2,0,0,0,0,0],
    }, {
        name: "Nekroverstärker",
        max: 5,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [0,0,0,0,1,0,0,0],
    }, {
        name: "Geisterportal",
        max: 2,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [0,0,0,0,2,2,0,0],
    }, {
        name: "Ritualkreis",
        max: 2,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [0,0,0,0,3,4,0,0],
    }],

    // properties of human enemies //
    humanProperties : [{
        name: "Miliz",
        attack: 4,
        defence: 5,
        damage: 2,
        lifepoints: 10,
        speed: 4,
    }, {
        name: "Bogenschütze",
        attack: 6,
        defence: 3,
        damage: 3,
        lifepoints: 10,
        speed: 5,
    }, {
        name: "Soldat",
        attack: 6,
        defence: 8,
        damage: 5,
        lifepoints: 25,
        speed: 6,
    }, {
        name: "Golem",
        attack: 10,
        defence: 12,
        damage: 6,
        lifepoints: 40,
        speed: 3,
    }, {
        name: "Ritter",
        attack: 12,
        defence: 11,
        damage: 12,
        lifepoints: 70,
        speed: 9,
    }, {
        name: "Magier",
        attack: 16,
        defence: 16,
        damage: 25,
        lifepoints: 100,
        speed: 6,
    }, {
        name: "Koloss",
        attack: 22,
        defence: 28,
        damage: 45,
        lifepoints: 250,
        speed: 5,
    }, ],
  };

  return data;
});
