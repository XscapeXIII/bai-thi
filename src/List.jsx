import { useState, Fragment } from "react";
import "./App.css";
import { Form, Card, Input, Button, Space } from "antd";
import { editAction, removeAction } from "./redux/actions/add.action";
import { useDispatch } from "react-redux";

function ListItem({ name, age, salary, index, id }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editForm] = Form.useForm();

  const dispatch = useDispatch();
  const renderView = () => {
    return (
      <Card key={id}>
        <div>ID: {index}</div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Salary: {salary}</div>
      </Card>
    );
  };

  const renderEdit = () => {
    return (
      <Form
        name={`editTodo-${id}`}
        form={editForm}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{
          name,
          age,
          salary,
        }}
        onFinish={(values) => {
          dispatch(editAction({ id, values }));
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
      </Form>
    );
  };

  return (
    <Card size="small" style={{ margin: 16 }}>
      {isEdit ? renderEdit() : renderView()}
      <Space>
        {isEdit ? (
          <>
            <Button
              key="save"
              type="primary"
              htmlType="submit"
              onClick={() => editForm.submit()}
            >
              Save
            </Button>
            <Button key="cancel" onClick={() => setIsEdit(false)}>
              Cancel
            </Button>
          </>
        ) : (
          <Button
            key="Edit"
            type="primary"
            ghost
            onClick={() => setIsEdit(true)}
          >
            Edit
          </Button>
        )}
        <Button danger onClick={() => dispatch(removeAction({ id }))}>
          Remove
        </Button>
      </Space>
    </Card>
  );
}

export default ListItem;
