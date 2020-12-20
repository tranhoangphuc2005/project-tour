import React from "react";
import { Spinner } from "reactstrap";
import "../css/spinner.css";

const Loading = () => {
  return (
    <div className={"spinner"}>
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="danger" />
      <Spinner color="warning" />
      <Spinner color="info" />
      <Spinner color="light" />
      <Spinner color="dark" />
    </div>
  );
};

export default Loading;
