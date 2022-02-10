import React from "react";
import { Wrapper, Content, Form } from "./Login.styles";

const Login = () =>(
    <Wrapper>
        <Content>
            <h1>Login</h1>
            <Form>                
                <label for='email'>Email</label>
                <input type='email' placeholder="Email" id="email" required/>

                <label for='pass'>Password</label>
                <input type='password' placeholder="Password" id="pass" required/>

                <input type='submit' value='Submit' />                
            </Form>
        </Content>
    </Wrapper>
)
export default Login;