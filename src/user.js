/**
 * Created by Alejandro on 8/20/2015.
 */
function User(){


}
User.prototype.sayHello=function(name){
    this.hello = "Hello " + name;
}

User.prototype.getRate = function(name){
    this.list={
        'hamid':20,
        'alex':30,
        'amy':40
    }
    if(this.list[name]){
        return this.list[name];
    }
    else{
        return 0;
    }
}

User.prototype.sortList = function(){
    this.list={
        'hamid':40,
        'alex':30,
        'amy':60
    }
    //if(this.lis)
    if(this.list[name]){
        return this.list[name];
    }
    else{
        return 0;
    }
}

