var myMap = new Map();

myMap.set("Key1","BD");
myMap.set("Key2","IND");
myMap.set("Key3","PAK");
myMap.set("Key4","SRI-LANKA");
myMap.set("Key5","AUS");
myMap.set("Key6","GER");

for( var myValue of myMap.values()){
    console.log("Values are : "+myValue);
}

for( var myKey of myMap.keys()){
    console.log("Keys are : "+myKey);
}

/////////
