(function(){
  'use strict';

  angular
    .module('NecroClicker')
    .controller('LichController', LichController);

    LichController.$inject = ['LichFactory', 'ManaFactory'];

    function LichController(LichFactory, ManaFactory){
      var vm = this;

      vm.lichStatus = LichFactory.lichStatus;
      vm.manaStatus = ManaFactory.manaStatus;

      vm.increaseUpgradeLevel= LichFactory.increaseUpgradeLevel;
      vm.increaseUpgradeCost= LichFactory.increaseUpgradeCost;
      vm.decreaseManaAmount = ManaFactory.decreaseManaAmount;
      vm.increaseManaPerClick = ManaFactory.increaseManaPerClick;
      vm.increaseManaPerSecond = ManaFactory.increaseManaPerSecond;

      vm.manaAvailable = manaAvailable;
      vm.getUpgrade = getUpgrade;

      ////////////////////////////////////////////
      ///////////////// functions ////////////////
      ////////////////////////////////////////////

      function manaAvailable(id) {
        return (vm.manaStatus.targetamount >= vm.lichStatus[id].cost);
      };

      function getUpgrade(id){
        vm.decreaseManaAmount(vm.lichStatus[id].cost);
        vm.increaseUpgradeCost(id, 1);
        vm.increaseUpgradeLevel(id, 1);
        if (vm.lichStatus[id].clicker){
          vm.increaseManaPerClick(vm.lichStatus[id].manaperclick);
        }
        else{
          vm.increaseManaPerSecond(vm.lichStatus[id].manapersecond);
        }
      };

    };

})();
