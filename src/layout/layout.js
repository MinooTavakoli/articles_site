import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Layout;
