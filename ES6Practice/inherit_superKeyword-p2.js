class parent {

    hello(){

        console.log("hasib al asad");

    }

    hello1(){
        console.log(" from hello1 inside parent");

    }

}

class child extends parent {

    demo(){
        super.hello();
        super.hello1();
    }

}

var childObj = new child();
childObj.demo();