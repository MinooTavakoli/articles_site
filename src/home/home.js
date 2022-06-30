import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postsData, addData } from "./redux/actions";
import Card from "../components/card/card";
import Layout from "../layout/layout";
import Title from "./sections/title/title";
import likeIcon from "../assets/icons/like.png";
import uploadIcon from "../assets/icons/upload.png";
import plusIcon from "../assets/icons/plus.png";
import Loading from "../components/loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import NotFound from "../components/notFound/notFound";
import "./home.css";

function Home({
  searchResultPage = [],
  setSearchResultPage = () => {},
  search = "",
  setSearch = () => {},
}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [notFound, setNotFound] = useState(false);

  let PageSize = 6;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
    if (resultSearch.length === 0) {
      setNotFound(true);
    } else if (resultSearch.length > 0) {
      setData(resultSearch);
      setNotFound(false);
      setSearchResultPage(resultSearch);
    }
  };

  const onSubmitDetails = (result) => {
    navigate(`postItem/${result.id}`, {
      state: { result, search },
    });
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

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
    <Layout
      data={data}
      onSubmit={onSubmit}
      search={search}
      setSearch={setSearch}
    >
      <Title />
      {notFound ? (
        <NotFound />
      ) : (
        <div className="card-home-wrapper">
          {loading && <Loading />}
          {!loading && (
            <div className="card-home-item">
              {searchResultPage.length > 0
                ? searchResultPage.map((item, index) => (
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
                  ))
                : sorted.map((item, index) => (
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
            </div>
          )}
        </div>
      )}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {/* <div className="home-button-wrapper">
        <Button label="Read more" type="danger" />
      </div> */}
    </Layout>
  );
}

export default Home;
