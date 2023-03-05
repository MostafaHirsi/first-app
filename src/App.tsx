import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { VechaiProvider, Button } from "@vechaiui/react";

function App() {
  return (
    <div className="flex flex-wrap w-full p-8 space-x-2">
      <Button color="primary">Button</Button>
      <Button variant="solid" color="primary">
        Button
      </Button>
      <Button variant="light" color="primary">
        Button
      </Button>
      <Button variant="ghost" color="primary">
        Button
      </Button>
      <Button variant="link" color="primary">
        Button
      </Button>
    </div>
  );
}

export default App;
