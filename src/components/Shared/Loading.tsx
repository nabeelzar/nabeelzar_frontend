import React from "react";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="catContainer">
      <div className="loading">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
