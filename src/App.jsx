import { useState, Fragment } from "react";
import "./App.css";
import { Form, Card, Input, Button } from "antd";
import ListItem from "./List";
import { v4 as uuidv4 } from "uuid";

// import { useDispatch, useSelector } from "react-redux";
// import { addToDoAction } from "./redux/actions/add.action";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [addForm] = Form.useForm();

  const handleAdd = (values, index) => {
    const newValues = {
      ...values,
      id: uuidv4(),
    };
    const newList = [...toDoList, newValues];
    setToDoList(newList);
  };

  const handleEditToDo = (id, values) => {
    const newToDoList = [...toDoList];
    const index = toDoList.findIndex((item) => item.id === id);
    newToDoList.splice(index, 1, values);
    setToDoList(newToDoList);
  };

  const handleRemoveToDo = (id) => {
    // const newToDoList = toDoList.filter((item) => item.id !== id);
    const newToDoList = [...toDoList];
    const index = toDoList.findIndex((item) => item.id === id);
    newToDoList.splice(index, 1);
    setToDoList(newToDoList);
  };

  const renderListUser = () => {
    return toDoList.map((item) => {
      return (
        <Fragment key={item.id}>
          <ListItem
            id={item.id}
            name={item.name}
            age={item.age}
            salary={item.salary}
            handleEditToDo={handleEditToDo}
            handleRemoveToDo={handleRemoveToDo}
          />
        </Fragment>
      );
    });
  };

  return (
    <div>
      <Card size="small" style={{ margin: 24 }}>
        <Form
          name="addTodo"
          form={addForm}
          layout="horizontal"
          onFinish={(values) => handleAdd(values)}
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
