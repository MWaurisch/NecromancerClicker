(function() {
  'use strict';

  angular
    .module('NecroClicker')
    .controller('NavigationController', NavigationController);

    function NavigationController() {
      var vm = this;
      vm.tab = 1;

      vm.selectTab = selectTab;
      vm.isSelectedTab = isSelectedTab;

      ////////////////////////////////////////////
      ///////////////// functions ////////////////
      ////////////////////////////////////////////

      // set tab to the selected Tab //
      function selectTab(setTab) {
        vm.tab = setTab;
      };

      // check which tab is set //
      function isSelectedTab(checkTab) {
        return (vm.tab == checkTab);
      };
    };

})();
