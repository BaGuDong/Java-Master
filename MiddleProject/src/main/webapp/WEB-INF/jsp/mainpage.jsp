<%@taglibprefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@pagecontentType="text/html;charset=UTF-8" language="java" %>

<div>
    <h1>로그인</h1>
    <a href="javascript:kakaoLogin()"><img src="<c:urlvalue="/img/kakao_login.png"/>" style="width: 200px"></a>
    <button>네이버 로그인</button>
</div>


<script type="text/javascript" src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script type="text/javascript">
 Kakao.init('e440154fb509449508e887c15f543fe1');
    function kakaoLogin() {
        Kakao.Auth.login({
            success: function (response) {
                Kakao.API.request({
                    url: '/v2/user/me',
                    success: function (response) {
                        alert(JSON.stringify(response))
                    },
                    fail: function (error) {
                        alert(JSON.stringify(error))
                    },
                })
            },
            fail: function (error) {
                alert(JSON.stringify(error))
            },
        })
    }
</script>