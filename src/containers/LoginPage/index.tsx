import { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import {
  LoginContainer,
  LoginContent,
  LoginForm,
  ButtonContainer,
} from "./styles";
import { FormInputs } from "./interfaces";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { postUser } from "./reducers";
import {
  selectPostUserToken,
  selectPostUserLoading,
  selectPostUserError,
} from "./reducers";
import { useAuth } from "../../contexts/AuthContext";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { login } = useAuth();
  const loading = useAppSelector(selectPostUserLoading);
  const error = useAppSelector(selectPostUserError);
  const authToken = useAppSelector(selectPostUserToken);

  const onFinish = (values: FormInputs) => {
    const { username, password } = values;

    const payload = {
      username,
      password,
      client_id: "developer_excercise",
      grant_type: "password",
    };

    dispatch(postUser(payload));
  };

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (authToken) {
      login(authToken);
      message.success("Login Successfully!");
    }
  }, [authToken, login]);

  return (
    <LoginContainer>
      <LoginContent>
        <h1>Login</h1>
        <LoginForm
          layout="vertical"
          autoComplete="off"
          onFinish={(values) => onFinish(values as FormInputs)}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
              { min: 6, message: "Must be at least 6 characters" },
            ]}
          >
            <Input size="large" placeholder="Username" allowClear />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Must be at least 6 characters" },
            ]}
          >
            <Input.Password size="large" placeholder="Password" allowClear />
          </Form.Item>

          <ButtonContainer>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={loading}
            >
              Login
            </Button>
          </ButtonContainer>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
};

export default LoginPage;
