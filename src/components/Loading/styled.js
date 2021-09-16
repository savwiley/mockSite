import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
  0% {
    color: rgba(0,0,0,0.1);
  }
  50% {
    color: rgba(0,0,0,0.2);
  }
  100% {
    color: rgba(0,0,0,0.1);
  }
`;

const radialChange = keyframes`
  0% {
    color: rgba(255,222,0);
  }
  33% {
    color: rgba(177,0,131);
  }
  66% {
    color: rgba(21,54,157);
  }
  100% {
    color: rgba(255,222,0);
  }
`;

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
      animation: ${colorChange} 2s linear infinite;
    }
  }
`;

export const SmallLoading = styled.div`
  background: rgba(255,255,255,0.3);
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
      animation: ${radialChange} 2s linear infinite;
    }
`;
