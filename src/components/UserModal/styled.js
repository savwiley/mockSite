import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px var(--border);
  overflow: hidden;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border);
  div {
    background: center/cover no-repeat url(${props => props.profilePic});
    width: 75px;
    height: 75px;
    border-radius: 50px;
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
`;