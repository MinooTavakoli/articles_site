import React, { useState } from "react";
import Card from "../components/card/card";
import Layout from "../layout/layout";
import Title from "./sections/title/title";
import CBS from '../assets/images/CBS.jpeg'
import likeIcon from '../assets/icons/like.png'
import uploadIcon from '../assets/icons/upload.png'
import plusIcon from '../assets/icons/plus.png'
import Button from "../components/buttons/button";
import PaginationOutlined from '../components/pagination'

import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import { default as data } from "./MOCK_DATA.json";

import './home.css'

function Home() {

  let [page, setPage] = useState(1);

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <Layout>
      <Title />
      <div className="card-home-wrapper">
        <PaginationOutlined page={page} onChange={handleChange} />
        <div className="card-home-item">
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
        </div>
        <div className="card-home-item">
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
        </div>
        <div className="card-home-item">
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
        </div>
        <div className="card-home-item">
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
        </div>
        <div className="card-home-item">
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
        </div>
        <div className="card-home-item">
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
          <Card title="CBS News" logo={CBS} logoCenter={CBS} likeIcon={likeIcon} uploadIcon={uploadIcon} plusIcon={plusIcon} likesCount="82" publishTime="1 day ago" description="Noem defends no exception for rape, incest in South Dakota trigger law: No reason for another tragedy to occur" />
        </div>
        <PaginationOutlined />
      </div>
      <div className="home-button-wrapper">
        <Button label="Read more" type="danger" />
      </div>
      <div className="home-pagination">
      </div>
    </Layout >
  )
}

export default Home;
