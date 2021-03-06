import {  useState } from "react";
import { web3 } from "../contracts/CallContract";

export default function Blocktest() {
  const [password, setPassword] = useState("");
  const [userAccount, setUserAccount] = useState("");
  const getpassword = (e) => {
    setPassword(e.target.value);
  };
  const CreateAccount = async (e) => {
    e.preventDefault();
    setPassword("");
    let accounts = await web3.eth.personal.newAccount(password);
    setUserAccount(accounts);
    // setState는 비동기처리이기 때문에 바로 console에 변한 값이 출력되지 않음
    // console.log("userAccount : ", userAccount);
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="지갑 패스워드 입력"
          onChange={getpassword}
          value={password}
        />
        <button onClick={CreateAccount}>회원가입 & 계정 생성</button>
        <div>환영합니다! 당신의 계정은 {userAccount} 입니다.</div>
      </form>
    </>
  );
}
