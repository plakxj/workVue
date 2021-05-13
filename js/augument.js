let animal = {
  name: "Animal",
  eat() {
    console.log(`${this.name} eats.`);
  }
};

let rabbit = {
  __proto__: animal,
  eat() {
    // ...bounce around rabbit-style and call parent (animal) method
    this.__proto__.eat(); // (*)
  }
};

let longEar = {
  __proto__: rabbit,
  eat() {
    // ...do something with long ears and call parent (rabbit) method
    this.__proto__.eat(); // (**)
  }
};

longEar.eat(); // Error: Maximum call stack size exceededFunction.prototype.method = function(name,func){
	
Number.method("integer",function() {
	return Math[this < 0? 'ceil':'floor'] (this);
});
String.method("trim",function() {
	return this.replace(/^\s+|s+$/g,'');  //the meaning of g?
});
String.method("deentityify",function(){
	var entity = {
		quot:'"',
		lt:"<",
		gt:">"
	};
	return function(){
		return this.replace(/&([^&;]+);/g,function(a,b){//function(regstring,regsubstring,pos,Objectstring),string with ^ in [],means exclude
			var r = entity[b];
			return typeof r === "string"?r:a;
		}
		);
  };}());
console.log("&gt;".deentityify());
var walk_the_DOM = function walk(node,func) {
	func(node);
	node = node.firstChild;
	while(node) {
		walk(node,func);
		node = node.nextSibling;
	}
};
var getElementsByAttribute = function(att,value) {
	var results = [];
	walk_the_DOM(document.body,function(node) {
		var actual = node.nodeType === 1&&node.getAttribute(att);
		if (typeof actual === "string"&&(actual===value||typeof value !=="string")) {
			results.push(node);
		}
	});
	return results;
};
var memoizer = function(memo,fundamental) {
	var shell = function(n) {
		var result = memo[n];
		if (typeof result !== "number") {
			result = fundamental(shell,n);
			memo[n] = result;
		}
	return result;
	};
	return shell;
};
Array.method("push",function(){
	this.splice.apply(this,[this.length,0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
})//这里用了splice和slice，什么区别？
Array.method("unshift",function() {
	this.splice.apply(this,[0,0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
});

function camelize(str) {
  return str.split("-")
         .map((item,index)=>index == 0? item : item[0].toUpperCase() + item.slice(1))
         .join('');
}
localStorage.setItem('test', 1);

