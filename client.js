var https = require('http');
const fetch = require("node-fetch");

const url = 'http://localhost:4000'

async function get(url) {
	console.log('\n\ngetting ' + url + '\n')
    try {
	const response = await fetch(url);
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error);
    }
};

var a = 2;
var b = 3;

get(url+'/getArea?side1='+a+'&side2='+b);