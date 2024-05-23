package co.yedam.member.service;

import co.yedam.Vo.MemberVo;

public interface MemberService {
	
	boolean MemberJoin(MemberVo Member);
	
	
	//로그인
	MemberVo login(String id, String pw);
	MemberVo checkMember(String id);
	boolean checkId(String id);
}
