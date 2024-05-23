package co.yedam.member.mapper;

import org.apache.ibatis.annotations.Param;


import co.yedam.Vo.MemberVo;

public interface MemberMapper {
	
	
	int insertMember(MemberVo Member);
	//로그인

	MemberVo selectMember(@Param("id") String id, @Param("pw") String pw);
	MemberVo selectMember2(String id);
	//중복체크
	boolean ckeckId(String id);


}