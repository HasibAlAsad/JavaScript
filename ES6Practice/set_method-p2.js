var mySet= new Set();

mySet.add("BD");
mySet.add("IND");
mySet.add("PAK");
mySet.add("BD");            // "BD" value dupli hole set value k ignore kore
mySet.add("SRI");
mySet.add("AUS");
mySet.add("GER");
mySet.add("BD");

        /* .clear()
           .delete("value")
           .has("value")
           .Values()        
           setName.size()

           */


console.log(mySet.values());

mySet.delete("GER");
console.log(mySet.values());


console.log(mySet.size);

if (mySet.has("BD")){
    console.log("YES");

  }
  else {
    console.log("No");
  }