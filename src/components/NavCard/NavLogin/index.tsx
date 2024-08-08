import { useRecoilState } from "recoil";
import { StyledNavLogin } from "./styled";
import { loginState, userState } from "@/store/login";

const NavLogin = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [user, setUser] = useRecoilState(userState);
  return (
    <StyledNavLogin>
      {isLogin ? (
        <div>
          <h2>로그인 정보</h2>
          <div>
            <div> id : {user.id} </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>로그인이 필요합니다.</h2>
          <div>
            <input placeholder="아이디"></input>
          </div>
          <div>
            <input placeholder="비밀번호"></input>
          </div>
          <button> 로그인 </button>
        </div>
      )}
    </StyledNavLogin>
  );
};

export default NavLogin;
