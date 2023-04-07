import { useState, Fragment } from "react";
import "./App.css";
import { Form, Card, Input, Button, Space } from "antd";

function ListItem({
  name,
  age,
  salary,
  index,
  id,
  handleEditToDo,
  handleRemoveToDo,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [editForm] = Form.useForm();
  const renderView = () => {
    return (
      <Card>
        <div>ID: {index}</div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Salary: {salary}</div>
      </Card>
    );
  };

  const renderEdit = () => {
    <Form
      name="editToDo"
      layout="horizontal"
      form={editForm}
      onFinish={(values) => {
        handleEditToDo(id, values);
        setIsEdit(false);
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            whitespace: true,
            message: "Name là bắt buộc!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            whitespace: true,
            message: "Age là bắt buộc!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Salary"
        name="salary"
        rules={[
          {
            required: true,
            whitespace: true,
            message: "Salary là bắt buộc!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>;
  };

  return (
    <div>
      {isEdit ? renderEdit() : renderView()}
      <Space>
        <Button type="primary" onClick={(values) => handleEditToDo(id, values)}>
          Edit
        </Button>
        <Button danger onClick={() => handleRemoveToDo(id)}>
          Remove
        </Button>
      </Space>
    </div>
  );
}

export default ListItem;
