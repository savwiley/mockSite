import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { PageLoading, SmallLoading } from "./styled";

export const Loading = () => {
  return (
    <PageLoading>
      <div className="icon">
        <FaCameraRetro />
      </div>
    </PageLoading>
  );
};

export const ModalLoading = () => {
  return (
    <SmallLoading>
      <div className="icon">
        <FaCameraRetro />
      </div>
    </SmallLoading>
  );
};
