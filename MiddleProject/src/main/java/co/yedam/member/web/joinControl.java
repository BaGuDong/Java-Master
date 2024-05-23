package co.yedam.member.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;

import co.yedam.Vo.MemberVo;
import co.yedam.common.control;
import co.yedam.member.service.MemberService;
import co.yedam.member.service.MemberServiceImpl;

public class joinControl implements control{

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String userId = req.getParameter("userId");
		String userName = req.getParameter("name");
		String userPassword = req.getParameter("userPW");
		String address1 = req.getParameter("address1");
		String address2 =req.getParameter("address2");
		String address3 = req.getParameter("address3");
		String address4 = req.getParameter("address4");
		String userPhone = req.getParameter("phone");
		String userEmail = req.getParameter("email");
		String userResp = req.getParameter("resp");

		MemberService svc = new MemberServiceImpl();

		//MemberVo mvo = svc.checkMember(writer);
		//if (mvo == null) {
			//req.setAttribute("message", "권한이 없습니다.");
			//req.getRequestDispatcher("WEB-INF/board/addBoard.jsp")//
					//.forward(req, resp);

			//return;
		//}
		MemberVo vo = new MemberVo();
		vo.setUserId(userId);
		vo.setUserPassword(userPassword);
		vo.setUserName(userName);
		vo.setAddress1(address1);
		vo.setAddress2(address2);
		vo.setAddress3(address3);
		vo.setAddress4(address4);
		vo.setUserEmail(userEmail);
		vo.setUserPhone(userPhone);
		vo.setUserResp(userResp);
		System.out.println("@@@@@@@@@@@@@@@@@@@@"+address2);
		
		if (svc.MemberJoin(vo)) {
			System.out.println("등록성공.");
			resp.sendRedirect("login.do");

		} else {
			System.out.println("등록실패.");
			resp.sendRedirect("join.do");

		}

	}

}
