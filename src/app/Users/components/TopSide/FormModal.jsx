import React from "react";
import { Modal, Form, Input, Select, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { addUser } from "../../../../redux/reducers/userReducer";

const { Option } = Select;

const FormModal = ({ isOpen = false, setIsOpen }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(
          addUser({
            id: Date.now(),
            name: values.name,
            age: values.age,
            email: values.email,
          })
        );
        setIsOpen(false);
        form.resetFields();
        message.success("User added successfully!");
      })
      .catch(() => {
        message.error("Please fill all required fields correctly.");
      });
  };

  return (
    <Modal
      title="New User"
      open={isOpen}
      onCancel={() => {
        setIsOpen(false);
        form.resetFields();
      }}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ age: "" }}
      >
        <Form.Item label="Full Name" name="name">
          <Input placeholder="Full name" />
        </Form.Item>

        <Form.Item label="Age" name="age">
          <Select placeholder="Select age">
            <Option value="">-</Option>
            {Array.from({ length: 100 }, (_, i) => (
              <Option key={i + 1} value={i + 1}>
                {i + 1}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FormModal;
