Number.method("integer",function(){
	return Math[this<0?"ceiling"："floor"](this);
}
document.write((-10/3).integer())
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
fade(document.body)