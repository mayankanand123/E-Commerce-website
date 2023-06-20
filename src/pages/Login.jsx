import styled from "styled-components";
import { Link } from "react-router-dom";
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.tendencias.kpmg.es/wp-content/uploads/2018/11/GettyImages-912949110.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" , height: "40%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 14px 18px;
  background-color: #0590c2;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Linked = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between ;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Links>
          <Linked>Forgot  Password?</Linked>
          <Linked><Link to="/register">Create a new account</Link></Linked>
          </Links>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;