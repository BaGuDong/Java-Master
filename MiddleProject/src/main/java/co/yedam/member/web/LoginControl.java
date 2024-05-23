package co.yedam.member.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.Vo.MemberVo;
import co.yedam.common.control;
import co.yedam.member.service.MemberService;
import co.yedam.member.service.MemberServiceImpl;

public class LoginControl implements control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// id, pw 파라미터.
		String id = req.getParameter("userId");
		String pw = req.getParameter("userPW");

		MemberService svc = new MemberServiceImpl();
		MemberVo mvo = svc.login(id, pw);

		if (mvo != null) {
			HttpSession session = req.getSession();
			session.setAttribute("logId", mvo.getUserId());

			// 관리자, 회원.
			if (mvo.getUserResp().equals("Admin"))
				resp.sendRedirect("joinForm.do");
			else
				resp.sendRedirect("main.do");

		} else {
			resp.sendRedirect("logForm.do");

		}
	}

}
