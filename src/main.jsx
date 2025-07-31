import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./context/UserContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext>
      <App />
      <Toaster position="bottom-right" />
    </UserContext>
  </StrictMode>
);
