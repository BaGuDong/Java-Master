package co.yedam.member.service;

import org.apache.ibatis.session.SqlSession;



import co.yedam.Vo.MemberVo;
import co.yedam.common.Datasource;
import co.yedam.member.mapper.MemberMapper;

public class MemberServiceImpl implements MemberService{

	SqlSession session = Datasource.getInstance().openSession(true);
	MemberMapper mapper = session.getMapper(MemberMapper.class);
	@Override
	public boolean MemberJoin(MemberVo board) {
		return mapper.insertMember(board) == 1;
	}
	@Override
	public MemberVo login(String id, String pw) {
		return mapper.selectMember(id, pw);
	}

	@Override
	public MemberVo checkMember(String id) {
		return mapper.selectMember2(id);
	}
	@Override
	public boolean checkId(String id) {
		return mapper.ckeckId(id);
	}
}
