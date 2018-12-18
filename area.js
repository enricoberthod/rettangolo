function getArea(v) {
    if (!v || v==undefined || arguments.length!==1) {
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
*/

module.exports = {getArea}