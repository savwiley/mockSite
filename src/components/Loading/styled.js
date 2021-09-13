import styled from "styled-components";

export const PageLoading = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 20;
  display: flex;
  .icon {
    width: fit-content;
    font-size: 6rem;
    margin: auto;
    path {
      color: rgba(0,0,0,0.1);
    }
  }
`;