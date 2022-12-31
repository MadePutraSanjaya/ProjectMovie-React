import React from "react";

import "./Banner-Pages.scss";

import bg from "../../Assets/banner-bg.png";

const PageHeader = (props) => {
  return (
    <div className="banner-pages" style={{ backgroundImage: `url(${bg})` }}>
        <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
