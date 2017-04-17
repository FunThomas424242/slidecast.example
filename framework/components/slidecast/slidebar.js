(function (angular) {
  'use strict';

  var modul = angular.module('slidecastApp');

  modul.component('slidebar', {
    templateUrl: '../framework/components/slidecast/slidebar.html',
    require: {
      container: '^slidecast'
    },
    controller: function SlidebarController() {
      this.$onInit = function () {
        this.folie = 0;
      };
      var vm = this;
      vm.setzeAufErsteFolie = setzeAufErsteFolie;
      vm.setzeAufLetzteFolie = setzeAufLetzteFolie;
      vm.geheZurFolie = geheZurFolie;
      vm.setzeAufVorherigeFolie = setzeAufVorherigeFolie;
      vm.setzeAufNaechsteFolie = setzeAufNaechsteFolie;
      vm.getFolienTitel = getFolienTitel;
      vm.getLetztenFolienTitel = getLetztenFolienTitel;
      vm.ermittleLetztenIndex = ermittleLetztenIndex;
      vm.isSelectedFolie = isSelectedFolie;

      function setzeAufErsteFolie() {
        vm.folie = 0;
        vm.geheZurFolie();
      }

      function setzeAufVorherigeFolie() {
        var minIndex = 0;
        vm.folie--;
        if (vm.folie < minIndex) {
          vm.folie = minIndex;
        }
        vm.geheZurFolie();
      }

      function setzeAufNaechsteFolie() {
        var lastIndex = vm.ermittleLetztenIndex();
        vm.folie++;
        if (vm.folie > lastIndex) {
          vm.folie = lastIndex;
        }
        vm.geheZurFolie();
      }


      function setzeAufLetzteFolie() {
        vm.folie = vm.ermittleLetztenIndex();
        vm.geheZurFolie();
      }

      function geheZurFolie() {
        vm.container.zeigeFolie(vm.folie);
      }

      function ermittleLetztenIndex() {
        return vm.container.getLastIndex();
      }

      function getFolienTitel(folienIndex) {
        return vm.container.slides[folienIndex][0];
      }

      function getLetztenFolienTitel() {
        var lastIndex = vm.ermittleLetztenIndex();
        return vm.getFolienTitel(lastIndex);
      }

      function isSelectedFolie(folienIndex) {
        return vm.folie == folienIndex;
      }

    }

  });

  


})(window.angular);