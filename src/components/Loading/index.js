import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { PageLoading } from "./styled";

const Loading = () => {
  return (
    <PageLoading>
      <div className="icon">
        <FaCameraRetro />
      </div>
    </PageLoading>
  );
};

export default Loading;
