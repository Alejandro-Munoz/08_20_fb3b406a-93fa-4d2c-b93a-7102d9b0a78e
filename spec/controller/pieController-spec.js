/**
 * Created by Alejandro on 8/20/2015.
 */
describe('test for pie',function(){
    var $httpBackend;
    var xhr;
    var $scope,
        controller;
    beforeEach(function(){
        module('pieApp');
        inject(function(_$httpBackend_,$controller,$http){
            xhr = $http;
            $scope={};
            $httpBackend = _$httpBackend_;

            controller = $controller('pieController',{$scope:$scope});
        });
    });
    it('testing eat slice function',function(){
        expect($scope.slice).toBe(8);
    })
    it('testing eat slice function',function(){
        $scope.eatSlice();
        expect($scope.slice).toBe(7);
    })

    it('testing eat slice function',function(){
        $scope.slice=0;
        expect($scope.slice).toBe(0);
    })
    function getRepos() {
        return xhr({ method: 'GET', url: '/someUrl' });
    }

    it('should return 0,1,1,2,3', function () {
        var result;

        $httpBackend.expectGET('/someUrl').respond('0,1,1,2,3');

        getRepos().then(function (data) {
            result = data.data;
        });

        $httpBackend.flush();
        expect(result).toEqual('0,1,1,2,3');
    });


})