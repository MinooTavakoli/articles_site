import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./home/home";
import PostItem from "./home/postItem/postItem";
import "./App.css";

export default function App() {
  const [searchResultPage, setSearchResultPage] = useState();
  const [search, setSearch] = useState("");

  let element = useRoutes([
    {
      path: "/",
      element: (
        <Home
          searchResultPage={searchResultPage}
          setSearchResultPage={setSearchResultPage}
          search={search}
          setSearch={setSearch}
        />
      ),
    },
    {
      path: "postItem/:postId",
      element: <PostItem searchResultPage={searchResultPage} />,
    },
  ]);
  return element;
}
