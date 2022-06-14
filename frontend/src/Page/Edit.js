import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../utils/api'
import { Form, Input, Button, Checkbox } from 'antd';
import {message,Space,Spin} from "antd";
import "./SignUp.css";




const Edit = () => {
    const params = useParams();
    const navigate = useNavigate()

    const[data,setData]=useState({})

    const dbData =async()=>{
        const getData = await api.post("http://localhost:5000/singleUser",{
            id : params?.id
        })
        setData(getData.data)
        console.log(getData.data)
    }

    useEffect(()=>{
        dbData()
    },[])

    const onFinish = async (values) => {
        // console.log('Success:', values);
        const {username,password,email,address_state,address_city} = values;
        const id = data._id;

        try{
            const repdata = await api.put("http://localhost:5000/editUser",{ 
              id,username,password,email,address_state,address_city
            })
            
            message.success(repdata.data)
            if(repdata.status === 200){
                navigate('/Users')
              }

          }
          catch(err){
            message.error(err.response.data);
          }
    }  
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div className="wrapper">
      {(data.username ? (

<div>
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
      username:data.username,
      password:data.password,
      email:data.email,
      address_state:data.address.address_state,
      address_city:data.address.address_city
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
      <Input/>
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
      label="Email"
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
          message: "Please input your address!",
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
          message: "Please input your address!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
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
      <Button type="primary" htmlType="submit">
        Edit
      </Button>
    </Form.Item>
  </Form>
</div>):(<Space size="middle">
<Spin size="large" />
</Space>))}
    </div>
  )
}

export default Edit