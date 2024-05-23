/**
 *  ajax1.js
 */

 const xhtp = new XMLHttpRequest();
//  xhtp.open(); // 호출할 페이지 지정.
 xhtp.open('get','../empList.json');
 xhtp.send(); // 호출 .
 xhtp.onload = function(){
	let jsonObj = JSON.parse(xhtp.responseText);
	console.log(jsonObj);
	//document.querySelector('body').innerHTML = xhtp.responseText
 }