/**
 * Created by Alejandro on 8/20/2015.
 */
var myApp=angular.module('pieApp',[]);
myApp.controller('pieController',function($scope,$http){
    $scope.customer = {
        name: 'alex',
        address: '1600 Amphitheatre'
    };
    //$scope.data = [];
    $scope.slice = 8;
    $scope.eatSlice = function(){
        if($scope.slice>0){
            $scope.slice--;
        }
        else
            return 0;
    };
    $scope.makeAjax = function(){
        $http.get('https://api.github.com/search/repositories?q=nodejs').
            then(function(response) {
                console.log('response'+response.data);
                $scope.data = response.data;
            }, function(response) {
                console.log('something broke'+response.error);
            });
    }



})