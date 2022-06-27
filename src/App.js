import logo from "./logo.ico";
import Home from "./home/home";
import { useRoutes } from "react-router-dom";
import "./App.css";

export default function App() {
  let element = useRoutes([{ path: "/", element: <Home /> }]);
  return element;
}
