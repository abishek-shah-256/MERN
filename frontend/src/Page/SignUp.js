import React from "react";
import { Form, Input, Button } from "antd";
import "./SignUp.css";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate()

  const onFinish = async (values) => {
    console.log("Success:", values);
    const {username,password,email,address_state,address_city,weather} = values;

    try{
      const {data} = await axios.post("http://localhost:5000/signUp",{
        username,password,email,address_state,address_city,weather
      })
      console.log(data.Message)
      message.success("Successfully registered")
      navigate('/login')

    }
    catch(err){
      message.error(
        "Try another data",
        10
      );
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="State"
          name="address_state"
          rules={[
            {
              required: true,
              message: "Please input your Province",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="City"
          name="address_city"
          rules={[
            {
              required: true,
              message: "Please input your City",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Temperature"
          name="weather"
          rules={[
            {
              required: true,
              message: "Please input the weather temperature",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="buttonn" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
