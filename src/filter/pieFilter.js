/**
 * Created by Alejandro on 8/20/2015.
 */
myApp.filter('ToUpper', function() {
        return function(item){
            return item.toUpperCase();
        }
});