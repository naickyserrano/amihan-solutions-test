import styled from "styled-components";
import { Form } from "antd";

const LoginContainer = styled.div`
  align-items: center;
  background: linear-gradient(120deg, #2980b9, #8e44ad);
  display: flex;
  height: 100%;
  justify-content: center;
`;
const LoginContent = styled.div`
  background: white;
  width: 100%;
  max-width: 25rem;
  border-radius: 0.625rem;
  box-shadow: 0.625rem 0.625rem 0.938rem rgba(0, 0, 0, 0.05);

  > h1 {
    text-align: center;
    padding: 1.25rem 0;
    border-bottom: 0.063rem solid silver;
  }

  @media screen and (max-width: 37.5em) {
    margin: 0 1rem;
  }
`;
const LoginForm = styled(Form)`
  padding: 0 2.5rem;
  margin-bottom: 1.875rem;

  .ant-form-item-explain-error {
    padding-left: 0.688rem;
  }
`;
const ButtonContainer = styled.div`
  padding: 0.625em 0;
  text-align: center;
`;

export { LoginContainer, LoginContent, LoginForm, ButtonContainer };
