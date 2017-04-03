class Point{
	constructor(x,y){
		this.x = x || 0;
		this.y = y || 0;
	}
	toString(){
		console.log(`(${this.x},${this.y})`);
	}
}
var a = new Point();
a.toString();