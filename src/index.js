import React from "react";
import { render } from "react-dom";
import { TodoApp } from "./todo-app";

const App = () => (
  <div>
   <TodoApp/>
  </div>
);

render(<App />, document.getElementById("root"));
