import "./LogInPage.css"
import { useNavigate } from "react-router-dom"
import { Form, Input, Button, message, Checkbox } from "antd"
import React, { ChangeEvent, useState } from "react";

// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';  
// import HttpApi from 'i18next-http-backend'

// i18n
//   .use(initReactI18next)
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     supportedLngs: ["en", "ru", "tm"],
//     fallbackLng: "en",
//     detection: {
//       order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
//       caches: ['cookie']
//     },
//     backend: { 
//       loadpath: '/assets/locales/{{lng}}/translation.json'
//     }  
//   });

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [status_username, setStatusUsername] = useState<"error" | undefined>(undefined);
    const [status_password, setStatusPassword] = useState<"error" | undefined>(undefined);

    // const { t } = useTranslation();

    const handleChangeUsername = (event : ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value);
      if(event.target.value !== "") {
      setStatusUsername(undefined);
      setStatusPassword(undefined);
      }
    }

    const handleChangePassword = (event : ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
      if(event.target.value !== "") {
        setStatusUsername(undefined);
        setStatusPassword(undefined);
      }
    }

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      event?.preventDefault();
       const userName = username === "narutofan";
       const passWord = password === "qwerty01!";
       
      if(username === "") {
        message.error("Enter a valid username");
        setStatusUsername("error");
      } else if(password === "") {
        message.error("Enter a valid password");
        setStatusPassword("error");
      } else if(!passWord || !userName) {
        message.error("Invalid username or password!")
        setStatusUsername("error");
        setStatusPassword("error");
       } else {
        navigate("/")
       }
    }

    return (
        <>
         <Form 
         layout='vertical' 
         className="form">
            <h1>Login</h1>
            <div 
            className='input-box'
            >
              <Form.Item >
                <Input 
                placeholder="Username" 
                onChange={handleChangeUsername} 
                status={status_username}
                ></Input>
              </Form.Item>
            </div>
            <div 
            className='input-box'
            >
              <Form.Item>
                <Input.Password 
                placeholder='Password' 
                className="password" 
                onChange={handleChangePassword}
                status={status_password}
                ></Input.Password>
              </Form.Item>
            </div>  
            <div 
            className='remember-forgot'
            >       
                <Form.Item>
                  <label>
                    <Checkbox
                    className="checkbox"
                    />
                    Remember me
                  </label>
                </Form.Item>
                <a href='#'>Forgot password?</a>
            </div>
            <Button 
            type='primary' 
            htmlType='submit' 
            className="button" 
            onClick={handleClick}>
              Login
            </Button>
            <div className='register-link'>
              <p>Dont have an account? <a href="#">Register</a></p>
            </div>
         </Form>
        </>
    )
}

export default LoginPage;