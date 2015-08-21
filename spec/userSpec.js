/**
 * Created by Alejandro on 8/20/2015.
 */
describe('testing my first method',function(){
   var user;
    beforeEach(function(){
        user = new User();
    });
    it('testing SayHello Method',function(){
       //var user = new User();
       user.sayHello('Amy');
       expect(user.hello).toBe('Hello Amy');

   });
    it('testing User Rate Method',function(){
        var rt = user.getRate('alex');
        expect(rt).toEqual(30);
    });
})