const getArea = require('./area').getArea



//VALIDI

var v;

test('v array con 2 elementi interi >=0', () => {
	v = [2,3]
	expect(getArea(v)).toEqual(6);
});

test('v valido con un elemento 0', () => {
	v = [2,0]
	expect(getArea(v)).toEqual(0);
});



//NON VALIDI

test('array non passato', () => {
	expect(getArea()).toEqual(-1);
});

test('più di un parametro', () => {
	v = [2,3]
	expect(getArea(v,2)).toEqual(-1);
});

test('v array con meno di 2 elementi', () => {
	v = [2]
	expect(getArea(v)).toEqual(-1);
});

test('v array con più di 2 elementi', () => {
	v = [2,3,4]
	expect(getArea(v)).toEqual(-1);
});

test('v con elemento negativo', () => {
	v = [2,-3]
	expect(getArea(v)).toEqual(-1);
});

test('v con elemento reale', () => {
	v = [2,3.01]
	expect(getArea(v)).toEqual(-1);
});

test('v con elemento NaN', () => {
	v = [2,'a']
	expect(getArea(v)).toEqual(-1);
});

test('v con elemento negativo', () => {
	v = [2,-3]
	expect(getArea(v)).toEqual(-1);
});

test('v con elemento null', () => {
	v = [2,null]
	expect(getArea(v)).toEqual(-1);
});

test('v con elemento undefined', () => {
	v = [2,]
	expect(getArea(v)).toEqual(-1);
});

