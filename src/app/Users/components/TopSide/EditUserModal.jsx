import React, { useEffect } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../redux/reducers/userReducer";

const { Option } = Select;

const EditUserModal = ({ isOpen = false, setIsOpen, user }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name || "",
        age: user.age || "",
        email: user.email || "",
      });
    }
  }, [user, form]);

  const handleSubmit = () => {
    const values = form.getFieldsValue();
    dispatch(
      updateUser({
        ...user,
        name: values.name,
        age: values.age,
        email: values.email,
      })
    );
    setIsOpen(false);
  };

  return (
    <Modal
      title="Edit User"
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input placeholder="Full name" />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please select age" }]}
        >
          <Select placeholder="Select age">
            <Option value="">-</Option>
            {Array.from({ length: 100 }, (_, i) => (
              <Option key={i + 1} value={i + 1}>
                {i + 1}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter an email" },
            { type: "email", message: "Invalid email" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <div
            style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}
          >
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;
