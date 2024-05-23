package co.yedam.member.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.control;
import co.yedam.member.service.MemberService;
import co.yedam.member.service.MemberServiceImpl;

public class checkIdControl implements control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");

		// 원본글, 댓글작성자, 댓글내용.
		String userId = req.getParameter("userId");

		Map<String, Object> result = new HashMap<>();

		MemberService svc = new MemberServiceImpl();
		if (svc.checkId(userId)) {
			result.put("retCode", "OK");

		} else {
			result.put("retCode", "NG");


		}
		Gson gson = new GsonBuilder().create();
		resp.getWriter().print(gson.toJson(result));
	} // end of exec.

}
