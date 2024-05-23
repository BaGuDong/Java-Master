/*
* empFetch.js Ajax기능을 fetch 함수 활용.
*/

document.addEventListener("DOMContentLoaded", initForm);

function initForm() {
	//Ajax호출.
	fetch('../empJson.json') // 반환결과없이 promise객체.
		.then(result=> result.json())  // 출력 스트림 (json)-> 객체변환
		.then(data => {
			console.log(data);
			data.forEach(emp => {
				let tr = makeRow(emp);
				document.querySelector('#elist').appendChild(tr);
			})
		})
		.catch( err=>console.log(err));
		
		//등록이벤트
		document.querySelector('#addBtn').addEventListener('click',addRow);
		
}// end of initForm

function makeRow(emp = {}) {		// 배열을 매개변수로 하는 makeList 함수 생성
	let props = ['empNo', 'empName', 'email', 'salary'];
	//한건에 대한 처리.
	let tr = document.createElement('tr');
	tr.setAttribute('data-no', emp.empNo)
	tr.addEventListener('dblclick', modifyRow);
	props.forEach(prop => {
		let td = document.createElement('td');
		td.innerHTML = emp[prop];
		tr.appendChild(td);
	}) // end of profs.forEach();


	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.innerHTML = "삭제"
	btn.addEventListener('click', deleteRow);
	td.appendChild(btn);
	tr.appendChild(td);
	return tr;

}; // end of makeRow();

//삭제 이벤트

function deleteRow(){
	let eno= this.parentElement.parentElement.dataset.no;
	let tr =this.parentElement.parentElement;
	fetch(''../empsave.json?job=delete&empNo='+eno)
	.then(result =>result.json())
	.then(data => {
		if(data.retCode == 'OK'){
			tr.remove();
		}else if (data.retCode == 'NG'){
			alert('처리 실패!');
		}
	})
	.catch(err => console.log(err));
} //end of deleteRow

function addRow() {
	// Ajax 호출
	const addHtp = new XMLHttpRequest();
	// 사원이름(ename), 연락처(phone), 급여(salary), 입사일자(hire), 이메일(email)
	let ename = document.querySelector('#ename').value;
	let ephone = document.querySelector('#ephone').value;
	let email = document.querySelector('#email').value;
	let edate = document.querySelector('#edate').value;
	let esal = document.querySelector('#esal').value;
	let param = 'job=add&name='+ename+'&phone'+ephone//
	+'&salary='+esal+'&hire='+edate+'&email='+email;
	
	fetch('../empsave.json',{
		method: 'post',
		headers:{'content-Type': 'application/x-www-form-urlencoded'},
		body:param
	})
	.then(result => result.json())
	.then(data =>{
				if(result.retCode == 'OK'){
			let tr = makeRow(data.retVal);
			document.querySelector('#elist').appendChild(tr);
			}
	})
	.catch(console.log);
	
	
	addHtp.open('post','../empsave.json');
	addHtp.setRequestHeader('Content-Type', 'application/X-www-form-urlencoded');
	addHtp.send();
	addHtp.onload = function(){
		let result = JSON.parse(addHtp.responseText);
		console.log(result);
		if(result.retCode == 'OK'){
			let tr = makeRow(result.retVal);
			document.querySelector('#elist').appendChild(tr);
		}
	}
}