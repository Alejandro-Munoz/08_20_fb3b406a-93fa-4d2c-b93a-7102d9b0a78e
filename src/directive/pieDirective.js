/**
 * Created by Alejandro on 8/20/2015.
 */
myApp.directive('aGreatEye',function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
    };

})