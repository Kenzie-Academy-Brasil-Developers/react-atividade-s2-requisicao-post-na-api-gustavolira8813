import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Login from "./components/Login";

function App() {
  const [status, setStatus] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <Login setStatus={setStatus} />
        {status !== "" ? <Display status={status} /> : console.log(status)}
      </header>
    </div>
  );
}

export default App;
