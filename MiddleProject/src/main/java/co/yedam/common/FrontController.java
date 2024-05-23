package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.member.web.LoginControl;
import co.yedam.member.web.LoginForm;
import co.yedam.member.web.LogoutControl;
import co.yedam.member.web.joinControl;
import co.yedam.member.web.joinFormControl;


public class FrontController extends HttpServlet {

	Map<String, control> map;

	// 생성자.
	public FrontController() {
		map = new HashMap<>();
	}

	// init.
	@Override
	public void init(ServletConfig config) throws ServletException {
		// url패턴과 실행할 Control 구현클래스 정의.
	
		map.put("/joinForm.do", new joinFormControl());
		map.put("/join.do", new joinControl()); // 회원가입화면
		
		map.put("/logForm.do", new LoginForm()); //로그인 관련
		map.put("/login.do", new LoginControl());
		map.put("/logout.do", new LogoutControl());
	}

	// service.
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// req.setCharacterEncoding("utf-8"); // 요청정보의 한글처리.

		String uri = req.getRequestURI();
		String context = req.getContextPath();
		System.out.println("uri: " + uri + ", context: " + context);
		String path = uri.substring(context.length());
		System.out.println("path: " + path);

		control control = map.get(path);
		control.exec(req, resp);
	}

	// destroy.
	@Override
	public void destroy() {

	}
}




