import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

function Layout({ children, data = [], onSubmit = () => {} }) {
  return (
    <React.Fragment>
      <Header data={data} onSubmit={onSubmit} />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
