(function(){
    'use strict';

    function charLimiterController($scope){

        this.limitCharacters = limitCharacters;

         function limitCharacters(){
            var maxLenght = $scope.model.config.charLimit;
            if(!$scope.model){
                $scope.model = {};
            }
            var currentLenght = $scope.model.value.length;
            if (currentLenght > maxLenght) {
                $scope.model.value = $scope.model.value.substr(0, maxLenght);
                $scope.info = "Blog summary length cannot exceed " + maxLenght + " characters";
            } else {
                $scope.info = "You have " + (maxLenght - currentLenght) + " characters left";
            }
        }

return $scope.charLimiterController = this;

    }

    angular.module('umbraco').controller('charLimiterController',charLimiterController);
    charLimiterController.$inject = ['$scope'];
}());