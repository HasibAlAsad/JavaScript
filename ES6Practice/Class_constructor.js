class myClass {

    constructor(a,b){                  // constructor holo class er nijossho func.. value return korte pare na..
        this.firstnum = a;             // obj create korle auto call hoi.. parameter obj er moddhe nei..
        this.secondnum = b;
    }

    add(){

        let result = this.firstnum + this.secondnum ;
        console.log(result);

    }

}

var obj = new myClass(10,20);

obj.add();