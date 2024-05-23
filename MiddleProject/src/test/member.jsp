<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- Section-->
	<section class="py-5">
		<h1>회원가입</h1>
		<p class="required ">* 필수입력사항</p>
		
			<div class="member">
			<table border="1">
				<colgroup>
					<col style="width: 150px;" />
					<col style="width: auto;" />
				</colgroup>
				<tbody>
					<tr>
						<th>아이디*</th>
						<td><input id="member_id" name="member_id"
							placeholder="영문 4~16자" /></td>
					</tr>
					<tr>
						<th>비밀번호*</th>
						<td><input id="pasw" name="pasw" /></td>
					</tr>
					<tr>
						<th>이름*</th>
						<td><input id="paswc" name="paswc" /></td>
					<tr>
						<th>주소*</th>
						<td><input type="text" id="sample6_postcode"
							placeholder="우편번호"> <input type="button"
							onclick="sample6_execDaumPostcode()" value="우편번호 찾기"> <br>
							<input type="text" id="sample6_address" placeholder="주소">
							<br> <input type="text" id="sample6_detailAddress"
							placeholder="상세주소"></td>
					<tr>
						<th>일반번호</th>
						<td><input id="homenum" name="homenum" /></td>
					<tr>
						<th>휴대번호*</th>
						<td><input id="phonenum" name="phonenum" /></td>
					<tr>
						<th>이메일*</th>
						<td><input id="email" name="email" /></td>
					<tr>
			</table>
		</div>
		<button id="addBtn">회원가입</button>
		<button id="addBtn">회원가입 취소</button>
	</section>
	
	<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	<script src="js/scripts.js"></script>