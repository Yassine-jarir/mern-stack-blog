import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
  return (
    <div class="text-center flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">x</span>
      </div>
    </div>
  );
}

export default Loading;
