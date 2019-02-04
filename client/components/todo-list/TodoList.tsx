import * as React from "react";
import "./TodoList.scss";

interface IProps {
  todoList: string[]
}

interface IState {

}

class TodoList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  };

  renderTodos() {
    return this.props.todoList.map((todoString, index) => {
      return <li className="todo-item" key={index}>{todoString}</li>
    });
  }

  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    );
  };
}

export default TodoList;