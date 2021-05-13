Function.prototype.method = function(name,func){
	if (!this.prototype[name]) {
		this.prototype[name] = func;
	}
	return this; //this statement is still neccessary?
};//chapter 3 prototype
var stooge = {
	"first-name" : "Jerome",
	"last-name" : "Howard"
	};
if (typeof Object.beget != "function") {
	Object.beget = function(o) {
		var F = function(){};
		F.prototype = o;
		return new F();
		}
	};
var another_stooge = Object.beget(stooge);
another_stooge["first-name"] = "Harry";
stooge.profession = "actor";
var name;
for (name in another_stooge) {
	if (typeof another_stooge.name !== "function"&&another_stooge.hasOwnProperty(name)) {
		console.log(name + ":" + another_stooge[name]);
	}
}//这里不能使用.dot吗？
//chapter 4 
//function literal
var add = function(a,b) {
	return a + b;
}
//method invocation,this example has been chang to a function.
var myObject = function() {
    var values = 0;
	return {
		increment:function(inc) {
			this.values += typeof inc === "number"?inc:i;
		 },
		getValue:function() {
			return values;
		}}}();
myObject.increment();	 //disabled?
console.log(myObject.getValue())
//function invacation
myObject.double = function() {
	var that = this;
	var helper =  function() {
		that.value = add(that.value,that.value);
	};
	helper(); 
};
myObject.double();
document.writeln(myObject.getValue());
//constructor invocation this example is changed too.
var Quo = function(status) {
	return {
		get_status:function() {
			return status;
		}
	};};
var myQuo = Quo("confused");
document.writeln(myQuo.get_status());
//apply invocation
var array = [3,4];
var sum = add.apply(null,array);
var statusObject = {
	status:"A-OK"
}
//var status = Quo.prototype.get_status.apply(statusObject);//disabled too.
//closure 
var fade = function(node) {
	var level = 1;
	var step = function() {
	var hex = level.toString(16);
	node.style.backgroundColor = "#DDFF" + hex + hex;
	if (level<15) {
		level += 1;
		setTimeout(step,1000);
	}
	}; 
	setTimeout(step,1000); 
};

fade(document.body);
var add_the_handlers = function(nodes){
	var i ;
	for (i = 0;i < nodes.length;i += 1){
		nodes[i].onclick = function(e) {
			alert(i);
			}
		}};
add_the_handlers(document.querySelectorAll("#myBoxDiv"));		//can not see the effects		
function serial_maker(){
	var prefix = "";
	var seq = 0;
	return {
		set_prefix:function(p){
			prefix = String(p);
		},
		set_seq:function(s){
			seq = s;
		},
		gensym:function(){
			var result = prefix +seq;
			seq += 1;
			return result;
		}
	};
	};
var seqer = serial_maker();
seqer.set_prefix = "Q";
seqer.set_seq = 1000;
var unique = seqer.gensym();
console.log(unique);
$("#myBoxDiv").
    width(100).
	height(100).
	css("background-color","yellow");
	
Function.method("curry",function(){
	var slice = Array.prototype.slice,
	args = slice.apply(arguments),
	that = this;
			 return function(){
		return that.apply(null,args.concat(slice.apply(arguments)));
	};
});
			
var fibonacci = function(n){
	var memo = [0,1];
	var fib = function(n) {
		var result = memo[n];
		if (typeof result !== "number") {
			result = fib(n-1) + fib (n-2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
	}();

var block = function(){
	var oldScope = scope;
	scope = Object.beget(scope);
	advance("{");
	parse(scope);
	advance("}");
	scope = oldScope;
};
//jQuery i place jQuery code in .js file,it's works.
$(function() {
	$("#myBoxDiv").mouseover(function(e){
		this.mytitle = this.title;
		this.title = ";"
		var tooltip = "<div id='tooltip'>" + this.mytitle + "</div>";
		$("body").append(tooltip);
		$("#tooltip").show()
				  .css({"top":(e.pageY+10)+"px","left":(e.pageX+20)+"px"});
	}).mouseout(function(){
		this.title = this.mytitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip").css({"top":(e.pageY+10)+"px","left":(e.pageX+20)+"px"});
	});
})
		
