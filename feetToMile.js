function feetToMile(feet){
    var mile = feet * 5280;
    return mile;
}

var mile = feetToMile(22300);
console.log(mile);
var programmingHero = feetToMile(32500);
console.log(programmingHero);


function mileToFeet (mile){
    var feet = mile/ 115280;
    return feet;
}

var feet = mileToFeet(30);
console.log(feet);


