import React from "react";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root")
const root = createRoot(rootElement!);

const App = () => {
  return (
    <div>
      <h1>Hello!!</h1>
      <h2>Welcome to your First React App..!</h2>
    </div>
  );
};

root.render(<App />)