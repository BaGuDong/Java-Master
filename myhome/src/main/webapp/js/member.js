/*
*member.js
*/
//추가 클릭 이벤트 등록.
//사용자의 입력값 3개 => tr > td *3 => tbody 하위요소 추가.

document.querySelector('#addMember').addEventListener('click', addMemberFnc);
function addMemberFnc() {
	//요소 생성(createElement)
	//자식요소(appendChild)

	let memNo = document.querySelector('#memberNo').value;
	let memName = document.querySelector('#memberName').value;
	let memPoint = document.querySelector('#memberPoint').value;
	const mem = { memNo, memName, memPoint }
	let tr = makeRow(mem);

	// document.querySelector('table:nth-of-type(2) tbody')
	document.querySelector('table#tlist tbody').appendChild(tr);

}
//member 정보를 활용 tr반환.
function makeRow(member = { memNo, memName, memPoint }) {
	// for in 루핑
	let tr = document.createElement('tr');
	//tr 에 click이벤트
	tr.addEventListener('click', function(e) {
		e.stopPropagation();
		document.querySelector('#memberNo').value =
			tr.children[0].innerHTML;
		document.querySelector('#memberName').value =
			tr.children[0].innerHTML;
		document.querySelector('#memberPoint').value =
			tr.children[0].innerHTML;
	})
	for (let prop in member) {
		let td = document.createElement('td');
		td.innerText = member[prop]; // mem.memNo
		tr.appendChild(td);


	}
	// <td><button>삭제</button></td>
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.innerText = '삭제'
	btn.addEventListener('click', deleteRow)
	td.appendChild(btn);
	tr.appendChild(td);

	//체크박스
	td = document.createElement('td');
	let chk = document.createElement('input');
	chk.setAttribute('type', 'checkbox');
	chk.addEventListener('change', changeRow);
	td.appendChild(chk);
	tr.appendChild(td);

	return tr;
} //end of makeRow
function deleteRow(evnt) {
	evnt.stopPropagation(); // 상 /하위 요소로 이벤트 차단.
	evnt.target.parentElement.parentElement.remove();
}

function changeRow(e) {
	//this => <input type = "checkbox" checked>
	console.log(this.checked); // checkbox일 경우.
}
//members 배열의 갯수만큼 tr 생성

members.forEach(function(item) {
	let tr = makeRow(item);
	document.querySelector('table#tlist tbody').appendChild(tr);
});




// thead input[type = "checkbox"]
document.querySelector('thead input[type = "checkbox"]')
	.addEventListener('change', function() {
		//event 핸들러 ==> this 
		//thead => tbody 적용,
		let inp = this;
		document.querySelectorAll('tbody input[type = "checkbox"]')
			.forEach(function(item) { // 화살표함수
				console.log(this);
				item.checked = inp.checked;
			})
	});

