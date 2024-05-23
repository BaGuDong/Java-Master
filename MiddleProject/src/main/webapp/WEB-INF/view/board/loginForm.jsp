<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<section class="py-5">

	<h1>Login</h1>
	<h3>WELCOME BACK</h3>

	<form action="Login.do" method="post">
		<table class="table">
			<tr>
				<td><input type="text" name="id" placeholder="아이디"></td>
			</tr>
			<tr>
				<td><input type="password" name="pw" placeholder="패스워드"></td>
			</tr>
			<tr align="center">
				<td colspan="2"><input type="submit" value="로그인"
					class="btn btn-primary"></td>
			</tr>
			<tr align="center">
				<td colspan="2"><input type="submit" value="회원가입"
					class="btn btn-primary"></td>
			</tr>

		</table>
	</form>
</section>
