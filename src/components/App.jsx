import React from "react";
import Login from "./Login"

let isLoggedIn = false;
function conditionalRender() {
  return isLoggedIn ? <h1>Hello</h1> : <Login />;
}

function App() {
  return (
    <div className="container">
      {conditionalRender()}
    </div>
  );
}

export default App;
