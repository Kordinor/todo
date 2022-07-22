import {TodoList} from "../todoList/TodoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Todo List</header>
      <div className="App-content">
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
