function getArea(v) {
    if (!v || arguments.length!==1) {
		return(-1); 
	}
	if (v.length!=2 || v.some((n)=> {return n<0} )  || !v.every(Number.isInteger)) {
		return(-1);
	}
	return(v[0]*v[1]);
}

/*
var a =[]
console.log(getArea(a))

var string = ''
var o = {lato1: 8, lato2: 3}
var a = Object.keys(o)
console.log(a)
string += a[0];
console.log(string)
var tmp = ''
tmp = a[0]
string += o.tmp;
console.log(o[tmp])
*/


module.exports = {getArea}