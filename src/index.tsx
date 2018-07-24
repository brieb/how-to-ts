import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Hello from "./components/Hello";
import MyContainer from "./containers/MyContainer";
import store from "./store";

function App() {
  return (
    <div>
      <Hello message="CodeSandbox" />
      <MyContainer foo="123" extra="123" />
    </div>
  );
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
