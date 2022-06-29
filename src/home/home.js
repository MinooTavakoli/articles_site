import React, { useState, useEffect, useMemo } from "react";
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
import Loading from "../components/loading/Loading";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import "./home.css";

function Home({}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let PageSize = 4;

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const onSubmit = (resultSearch) => {
    if (resultSearch) {
      setData(resultSearch);
    } 
  };

  const onSubmitDetails = (result) => {
    navigate(`postItem/${result.id}`, {
      state: { result },
    });
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  function sortByDate(a, b) {
    if (a.timePublish < b.timePublish) {
      return 1;
    }
    if (a.timePublish > b.timePublish) {
      return -1;
    }
    return 0;
  }

  const sorted = currentTableData.sort(sortByDate);

  return (
    <Layout data={data} onSubmit={onSubmit}>
      <Title />
      <div className="card-home-wrapper">
        {loading && <Loading />}
        {!loading && (
          <div className="card-home-item">
            {data.map((item, index) => (
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
                onClick={() => {
                  onSubmitDetails(item);
                }}
              />
            ))}

            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={data.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>
      <div className="home-button-wrapper">
        <Button label="Read more" type="danger" />
      </div>
    </Layout>
  );
}

export default Home;
