import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 65%;
  top: 20%;
  width: 200px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px var(--border);
  overflow: hidden;
  z-index: 2;
`;
//see if you can track the mouse for positioning

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border);
  padding: 10px 5px;
  div {
    background: center/cover no-repeat url(${(props) => props.profilePic});
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
`;

export const PostImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostHolder = styled.div`
  width: 70px;
  height: 70px;
  background: center/cover no-repeat url(${(props) => props.background});
`;
