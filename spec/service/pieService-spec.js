/**
 * Created by Alejandro on 8/20/2015.
 */
describe('dessert manager',function(){
    var myValue,
        srvManager;

    beforeEach(function(){
        module('pieApp');
        inject(function(_dessertManager_,_DessertValue_){
            myValue = _DessertValue_;
            srvManager = _dessertManager_;
        })
    });

    it('testing for initialization',function(){
        expect(myValue.pies).toEqual([
            {flavor:'cherry', score:20},
            {flavor:'lemon', score:19},
            {flavor:'apple', score:18}
        ]);
    })
    it('testing for initialization',function(){
        //console.log(srvManager.pieFlavor());
        expect(srvManager.pieFlavor()).toEqual([
            'cherry',
            'lemon',
            'apple'
        ]);
    })
    it('should return the 3 pies flavor string',function(){
        var flavors= srvManager.pieFlavor();
        expect(flavors.length).toEqual(3);
        expect(flavors[1]).toEqual('lemon');
    })
    it('should be sorted data by flavor',function(){
        var flavors= srvManager.pieFlavorSort();
        expect(flavors[0].flavor).toEqual('apple');
    })
})