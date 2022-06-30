import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

function Layout({
  children,
  data = [],
  onSubmit = () => {},
  search = "",
  setSearch = () => {},
}) {
  return (
    <React.Fragment>
      <Header
        data={data}
        onSubmit={onSubmit}
        search={search}
        setSearch={setSearch}
      />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
