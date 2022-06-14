import React from "react";
import { Modal, Button } from "antd";
import api from '../../utils/api'

const modal = ({ modalVisible, setModalVisible, deleteUrl }) => {
  const cancelFunc = () => {
    setModalVisible(false);
  };

  const deleteFunc = async () => {
    setModalVisible(true);
    const deleteData = await api.delete(`${deleteUrl}`);
    console.log(deleteData.data);
    if (deleteData) setModalVisible(false);
  };

  return (
    <div>
      <Modal
        visible={modalVisible}
        closeIcon
        title="Are you sure?"
        footer={null}
      >
        <Button onClick={deleteFunc}>Delete</Button>
        <Button onClick={cancelFunc}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default modal