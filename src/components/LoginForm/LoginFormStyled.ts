import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: burlywood;

  .loginform-label {
    padding: 5px;
    font-size: 20px;
  }

  .loginform-title {
    text-decoration: underline;
  }

  .loginform-input {
    padding: 10px;
    border-radius: 5%;
    margin-bottom: 10px;
    background-color: aliceblue;
    font-size: 20px;
  }

  .loginform-button {
    padding: 15px;
    cursor: pointer;
    background-color: aliceblue;
    border-radius: 10%;
    font-size: 20px;
  }
`;
export default LoginFormStyled;
