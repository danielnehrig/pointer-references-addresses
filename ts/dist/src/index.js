"use strict";
// Func to mutate var
var mutateVar = function (value) {
    value = 8;
};
// Func to mutate obj
var mutateObj = function (obj) {
    obj.value = 20;
};
// Main Run execution
var main = function () {
    // Declare initalize Vars
    var value = 5;
    var obj = {
        value: 10,
    };
    // Print out current values
    console.log("value = " + value);
    console.log("obj.value = " + obj.value);
    // Mutate values
    console.log("mutating vars");
    mutateVar(value);
    mutateObj(obj);
    // Print out mutated values
    console.log("value = " + value);
    console.log("obj.value = " + obj.value);
    return 0;
};
// Exec main
main();
