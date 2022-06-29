import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./home/home";
import PostItem from "./home/postItem/postItem";
import "./App.css";

export default function App() {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "postItem/:postId", element: <PostItem /> },
    ]);
    return element;
}