import * as React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import { Layout, Row, Col, Input, Button } from "antd";
const { Content } = Layout;

import TodoList from "./todo-list/TodoList";

interface IProps {

}

interface IState {
  inputValue: string
  todoList: string[]
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      inputValue: "",
      todoList: [
        "Walk dog",
        "Make dinner"
      ]
    };
  }

  addTodo() {
    let currentTodos = this.state.todoList;
    currentTodos.push(this.state.inputValue);
    this.setState({
      inputValue: "",
      todoList: currentTodos
    });
  }

  render() {
    return (
      <Layout className="layout">
        <Content className="content">
          <Row>
            <Col>
              <Input
                style={{ width: "300px", marginRight: "10px" }}
                placeholder="Add a new ToDo"
                value={this.state.inputValue}
                onChange={event => this.setState({ inputValue: event.target.value })}
              />
              <Button onClick={() => this.addTodo()}>Add Todo</Button>
            </Col>
          </Row>
          <TodoList todoList={this.state.todoList}/>
        </Content>
      </Layout>
    );
  }
}

export default App;
