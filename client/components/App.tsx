import * as React from "react";
import "./App.scss";
import "antd/dist/antd.css";

import Cookies from "js-cookie";
import { Button, Checkbox } from "antd";

interface IToDo {
  description: string;
  checked: boolean;
}

interface IState {
  inputValue: string
  todos: IToDo[]
}

class App extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: Cookies.getJSON("todos")
    }
  }

  componentWillUpdate(oldState: IState, newState: IState) { // componentWillUpdate runs when ever there are changes made to the state
    if (oldState.todos !== newState.todos) Cookies.set("todos", newState.todos); // if there are updates to the todo list, then save the changes to the cookies
  }

  addTodo(event: React.FormEvent) {
    event.preventDefault(); // prevent page reload
    let todos = this.state.todos;
    todos.push({
      description: this.state.inputValue,
      checked: false
    });
    this.setState({ todos, inputValue: "" });
  }

  deleteTodo(todoIndex: number) {
    this.setState({ todos: this.state.todos.filter((todo, currentIndex) => currentIndex !== todoIndex ? todo : null) });
  }

  checkTodo(todoIndex: number, checked: boolean) {
    const todos = this.state.todos.map((todo, index) => {
      if (index === todoIndex) {
        let updatedTodo = todo;
        updatedTodo.checked = checked;
        return updatedTodo
      } else return todo;
    });
    this.setState({ todos });
  }

  renderTodos() { // creates an html element for each todo in the array
    return this.state.todos.map((todo, index) => (
      <div key={index}>
        <Checkbox
          checked={todo.checked}
          onChange={event => this.checkTodo(index, event.target.checked)}
        />
        <span>{todo.description}</span>
        { todo.checked ? <Button onClick={() => this.deleteTodo(index)} shape="circle" type="danger" icon="delete" size="small" /> : null }
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        {this.renderTodos()}
        <form onSubmit={event => this.addTodo(event)}>
          <input
            value={this.state.inputValue}
            onChange={event => this.setState({ inputValue: event.target.value }) }
          />
          <button type="submit">Add ToDo</button>
        </form>
      </div>
    );
  }
}

export default App;