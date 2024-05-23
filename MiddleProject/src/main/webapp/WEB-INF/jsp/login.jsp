<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login</title>
</head>
<body>

	<section class="py-5">
		<h1>회원가입</h1>
		<div class="member">
			<h1>LOGIN</h1>

			<h3>WELCOME BACK</h3>
			<form>
				<table border="1">
					<colgroup>
						<col style="width: 150px;" />
						<col style="width: auto;" />
					</colgroup>
					<tr>
						<td><input type="text" name="userId" placeholder="아이디"
							required /></td>
						<td><input type="text" name="userPw" placeholder="패스워드"
							required /></td>
					</tr>
				</table>
		</div>
		<button onclick="">로그인</button>
		<button onclick="">회원가입</button>
		<button onclick="">아이디/비밀번호 찾기</button>
		</form>
	</section>
</body>
</html>