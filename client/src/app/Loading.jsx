import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
  return (
    <div className="text-center flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">x</span>
      </div>
    </div>
  );
}

export default Loading;
