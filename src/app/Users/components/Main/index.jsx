import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Modal, Empty, Space, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { removeUser } from "../../../../redux/reducers/userReducer";
import EditUserModal from "../TopSide/EditUserModal";

const { Text } = Typography;

const Main = () => {
  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  return (
    <div>
      {usersList.length === 0 ? (
        <Empty description="No users found" style={{ marginTop: 40 }} />
      ) : (
        <Space direction="vertical" style={{ width: "100%" }} size="middle">
          {usersList.map((user) => (
            <Card
              key={user.id}
              title={
                <Text strong>
                  {user.name}
                  <Text  italic>
                    --{user.age} age
                  </Text>
                </Text>
              }
              extra={
                <Space>
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => handleEditClick(user)}
                  />
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => dispatch(removeUser(user.id))}
                  />
                </Space>
              }
            >
              <Text type="secondary">{user.email}</Text>
            </Card>
          ))}
        </Space>
      )}

      <EditUserModal
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        user={selectedUser}
      />
    </div>
  );
};

export default Main;
