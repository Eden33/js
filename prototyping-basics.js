//simple prototypal inheritance
var SimplePerson = {
  describe: function() {
    return this.description + " " + this.name;
  }
};
var edi = {
  __proto__: SimplePerson,
  name: "Edi",
  description: "A talented software developer called:"
};
console.log(edi.describe());

//simple prototypal inheritance with functions
function Person(name, description) {
    this.name = name;
    this.description = description;
};

Person.prototype.describe = function () {
    return this.description + " " + this.name;
};

var edi = new Person("Edi", "A talented software developer called:");
console.log(edi.describe());
