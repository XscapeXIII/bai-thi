import { useState, Fragment } from "react";
import "./App.css";
import { Form, Card, Input, Button } from "antd";
import ListItem from "./List";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { addAction } from "./redux/actions/add.action";

function App() {
  const [addForm] = Form.useForm();

  const dispatch = useDispatch();
  const { toDoList } = useSelector((state) => state.add);

  // const handleEditToDo = (id, values) => {
  //   const newToDoList = [...toDoList];
  //   const index = toDoList.findIndex((item) => item.id === id);
  //   newToDoList.splice(index, 1, values);
  //   setToDoList(newToDoList);
  // };

  // const handleRemoveToDo = (id) => {
  //   // const newToDoList = toDoList.filter((item) => item.id !== id);
  //   const newToDoList = [...toDoList];
  //   const index = toDoList.findIndex((item) => item.id === id);
  //   newToDoList.splice(index, 1);
  //   setToDoList(newToDoList);
  // };

  const renderListUser = () => {
    return toDoList.map((item, index) => {
      return (
        <Fragment key={item.id}>
          <ListItem
            index={index}
            id={item.id}
            name={item.name}
            age={item.age}
            salary={item.salary}
          />
        </Fragment>
      );
    });
  };

  return (
    <div>
      <Card title="USER:" bordered={false} style={{ margin: 25 }} size="small">
        <Form
          name="addTodo"
          form={addForm}
          layout="horizontal"
          onFinish={(values) => {
            addForm.resetFields();
            dispatch(addAction({ values }));
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
          <Button type="primary" htmlType="submit">
            Add
          </Button>
          <Button type="outline">Reset Form</Button>
        </Form>
      </Card>
      {renderListUser()}
    </div>
  );
}

export default App;
