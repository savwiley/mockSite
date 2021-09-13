import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { PageLoading, SmallLoading } from "./styled";

const Loading = () => {
  return (
    <PageLoading>
      <div className="icon">
        <FaCameraRetro />
      </div>
    </PageLoading>
  );
};

const ModalLoading = () => {
  return (
    <SmallLoading>
      <div className="icon">
        <FaCameraRetro />
      </div>
    </SmallLoading>
  );
};

export default Loading;
