/*
*data.js
*/

const members = [
	{ memNo: 1001, memName: '홍길동', memPoint: 90 },
	{ memNo: 1002, memName: '김길동', memPoint: 100 },
	{ memNo: 1003, memName: '박길동', memPoint: 95 },

];


//배열 for.
// for(let mem of members){}

members.forEach(function(item, idx, ary){
if (item.memPoint >= 95)
	console.log(item, idx, ary)

})