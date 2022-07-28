class parent {

    hello(){

        console.log("hasib al asad");

    }

    hello1(){
        console.log(" from hello1 inside parent");

    }

}

class child extends parent {

    hello2(){
        console.log(" from hello2 inside child");


    }

    hello(){
        console.log("hasib al asad overridden in child");  // method overriding.. child class func change korte pare parent class er
    }

}

var obj = new child();
obj.hello1();
obj.hello2();
obj.hello();