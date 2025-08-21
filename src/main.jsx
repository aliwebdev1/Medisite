import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./context/UserContext.jsx";
import { Toaster } from "react-hot-toast";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <App />
        <Toaster position="bottom-right" />
      </UserContext>
    </QueryClientProvider>
  </StrictMode>
);
