/**
 * Created by Alejandro on 8/20/2015.
 */

describe('filter', function() {
    var myValue,
        srvManager;

    beforeEach(function(){
        module('pieApp');
        inject(function(_dessertManager_,_DessertValue_,_ToUpperFilter_){
            myValue = _DessertValue_;
            srvManager = _dessertManager_;
            myFilter = _ToUpperFilter_;
        })
    });

    describe('ToUpper', function() {

        it('should convert to upper 2',function(){
                var flavors= srvManager.pieFlavor();
                expect(myFilter(flavors[0])).toEqual('CHERRY');
        });

    });
});