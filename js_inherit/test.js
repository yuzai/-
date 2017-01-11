function Animal(name){
  this.name = name | "animal";
  this.sleep = function(){
    console.log(this.name+' is sleeping');
  };
}
Animal.prototype.eat = function(){
  console.log(this.name+' is eating');
};

function Cat(){
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

var cat = new Cat();
console.log(cat);
console.log(Cat);
