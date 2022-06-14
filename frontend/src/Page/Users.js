import React from "react";
import "./Users.css";
import { Table } from "react-bootstrap";
import api from '../utils/api'
import { useState, useEffect } from "react";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {message} from "antd";
import Modals from '../Components/Modal/modal'



const Users = () => {
  const navigate = useNavigate()
  const [storagedata,setStoragedata] = useState({})
  
  useEffect(()=>{
    const users = JSON.parse(localStorage.getItem('userLoggedIn'))
    setStoragedata(users)
  },[])

  const [userdataa, setUserdata] = useState([]);
  const [modalVisible,setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const func = async () => {
    const apiData = await api.get("http://localhost:5000/users");
    setUserdata(apiData.data);
  };

  useEffect(() => {
    func();
  }, [modalVisible]);

  const editClick = (i) => {
    navigate('/edit/'+i)
  };

  const deleteClick = async(i) => {
    setModalVisible(true)
    setDeleteId(i)
  };

  return (
    <div className="Cont">
      <Modals modalVisible={modalVisible} setModalVisible={setModalVisible} deleteUrl={`http://localhost:5000/deleteUser/?userid=${deleteId}`}/>

      {storagedata ? (
        <div className="tableCont">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>State</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userdataa.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address.address_state}</td>
                  <td>{item.address.address_city}</td>
                  <td>
                    <EditTwoTone
                      onClick={() => {
                        editClick(item._id);
                      }}
                    />
                  </td>
                  <td>
                    <DeleteTwoTone
                      onClick={() => {
                        deleteClick(item._id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      ) : ("Log in required")}
    </div>
  );
};

export default Users;
