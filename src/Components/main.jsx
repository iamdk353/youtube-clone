import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header, Sidebar, Video } from "./CompPaths";
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Video />
    </>
  );
}
