/**
 * Created by Alejandro on 8/20/2015.
 */
myApp.value('DessertValue',{
    pies:[
        {flavor:'cherry', score:20},
        {flavor:'lemon', score:19},
        {flavor:'apple', score:18}
    ]
}).factory('dessertManager',['DessertValue',function(dessertValue){
    return{
        pieFlavor:function(){
            return dessertValue.pies.map(function(pie){
                return pie.flavor;
            })
        },
        pieFlavorSort:function(){
            dessertValue.pies.sort(function(a,b){
                if(a.flavor > b.flavor){
                    return 1;
                }
                if(a.flavor < b.flavor){
                    return -1;
                }
                return 0;
            });
            return dessertValue.pies;
        }
    }
}])