var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
        console.log("constructor is running");
    }
    Human.prototype.display = function () {
        console.log("".concat(this.name, " is ").concat(this.age));
    };
    return Human;
}());
var h = new Human("kmk", 22);
h.display();
