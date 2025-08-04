import "./App.css";
import router from "./route/Route";
import { RouterProvider } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";


function App({ children }) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}

export default App;
