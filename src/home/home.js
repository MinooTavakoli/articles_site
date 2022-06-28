import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postsData } from "./redux/actions";
import Card from "../components/card/card";
import Layout from "../layout/layout";
import Title from "./sections/title/title";
import likeIcon from "../assets/icons/like.png";
import uploadIcon from "../assets/icons/upload.png";
import plusIcon from "../assets/icons/plus.png";
import Button from "../components/buttons/button";
import PaginationOutlined from "../components/pagination";
import Loading from "../components/loading/Loading";
import "./home.css";
import { Link } from "react-router-dom";
import PostItem from "./postItem/postItem";

function Home({}) {
  let [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:3000/posts"
        );
        setData(response);
        dispatch(postsData(response || []));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleChange = (e, value) => {
    setPage(value);
  };

  const onSubmit = (resultSearch) => {
    if (resultSearch) {
      setData([resultSearch]);
    }
  };

  return (
    <Layout data={data} onSubmit={onSubmit}>
      <Title />
      <div className="card-home-wrapper">
        <PaginationOutlined page={page} onChange={handleChange} />
        {loading && <Loading />}
        {!loading && (
          <div className="card-home-item">
            {data.map((item, index) => (
              <Link key={`_card${index + 1}`} to={`/postItem/${item.id}`}>
                <Card
                  key={`_card${index + 1}`}
                  title={item.title}
                  logo={item.logo}
                  logoCenter={item.imageNews}
                  likeIcon={likeIcon}
                  uploadIcon={uploadIcon}
                  plusIcon={plusIcon}
                  likesCount={item.likesCount}
                  publishTime={item.timePublish}
                  description={item.description}
                />
                <PostItem data={data} id={item.id} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <PaginationOutlined />
      <div className="home-button-wrapper">
        <Button label="Read more" type="danger" />
      </div>
      <div className="home-pagination"></div>
    </Layout>
  );
}

export default Home;
