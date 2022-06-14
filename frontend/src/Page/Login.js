import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./SignUp.css";
import api from '../utils/api'
import {message} from "antd";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate()

  const onFinish = async (values) => {
    // console.log("Success:", values);
    const {username,password} = values;

    try{
      const repdata = await api.post("http://localhost:5000/login",{
        username,password
      })
      console.log('reply aako ho '+repdata.data.address.address_state)
      message.success(repdata.data)
      console.log(repdata)
      navigate('/Users')
      window.localStorage.setItem("userLoggedIn",JSON.stringify(repdata.data))
      window.location.reload()

    }
    catch(err){
      message.error(err.response.data);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="wrapper">
      <Form
        className="form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
        className="rememberr"
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="buttonn" type="primary" htmlType="submit">
            login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
