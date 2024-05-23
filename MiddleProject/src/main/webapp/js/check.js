
        function check_pw(){
 
            var pw = document.getElementById('pw').value;
            var SC = ["!","@","#","$","%"];
            var check_SC = 0;
 
            if(pw.length < 4 || pw.length>16){
                window.alert('비밀번호는 4글자 이상, 16글자 이하만 이용 가능합니다.');
                document.getElementById('pw').value='';
            }
            for(var i=0;i<SC.length;i++){
                if(pw.indexOf(SC[i]) != -1){
                    check_SC = 1;
                }
            }
            if(check_SC == 0){
                window.alert('!,@,#,$,% 의 특수문자가 들어가 있지 않습니다.')
                document.getElementById('pw').value='';
            }
            if(document.getElementById('pw').value !='' && document.getElementById('pw2').value!=''){
                if(document.getElementById('pw').value==document.getElementById('pw2').value){
                    document.getElementById('check').innerHTML='비밀번호가 일치합니다.'
                    document.getElementById('check').style.color='blue';
                }
                else{
                    document.getElementById('check').innerHTML='비밀번호가 일치하지 않습니다.';
                    document.getElementById('check').style.color='red';
                    
                }
            }
        }

        
        
        // 비번일치
        
        // 중복체크
        
        
        function checkId() {
	var inputed = $('#mId').val(); //mid id를 가진 input에 입력한 값
   	$.ajax({
      data : {
         mId : inputed //입력한 값을 mId라는 변수에 담음
      },
      url : "checkid", // data를 checkid url에 보냄 (Controller에서 받아처리한다. 중복이 되면 1, 아니면 0을 반환하는 함수를 구현했다.)
      success : function(data) {
         if(data == '1') { //아이디가 중복되었을 때 
         	//아이디가 중복되었을 때 기능처리
         }
 }
        
        