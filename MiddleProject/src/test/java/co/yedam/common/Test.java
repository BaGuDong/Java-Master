package co.yedam.common;

import org.apache.ibatis.session.SqlSession;

import co.yedam.Vo.MemberVo;
import co.yedam.member.mapper.MemberMapper;

public class Test {
	public static void main(String[] args) {
		SqlSession session = Datasource.getInstance().openSession(true);
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		MemberVo vo = new MemberVo();
		
		vo.setUserId("d");
		vo.setUserPassword("d");
		vo.setUserName("d");
		vo.setAddress1("d");
		vo.setAddress2("d");
		vo.setAddress3("d");
		vo.setAddress4("d");
		vo.setUserEmail("d");
		vo.setUserPhone("d");
		vo.setUserResp("d");
		
		mapper.insertMember(vo);
	}
}
