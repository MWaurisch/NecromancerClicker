(function() {
  'use strict';

  angular
    .module('NecroClicker')
    .controller('ManaController', ManaController);

    ManaController.$inject = ['ManaFactory', '$interval'];

    function ManaController(ManaFactory, $interval) {
      var vm = this;

      vm.manaStatus = ManaFactory.manaStatus;
      vm.getManaPerClick = ManaFactory.getManaPerClick;
      vm.getManaPerSecond = ManaFactory.getManaPerSecond;

      ////////////////////////////////////////////
      ///////////////// functions ////////////////
      ////////////////////////////////////////////

      // call manaPerSecond every second //
      $interval(function trickerManaPerSecond() {
        vm.getManaPerSecond();
      }, 1000);

    };

})();
