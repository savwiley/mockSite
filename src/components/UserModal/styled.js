import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 65%;
  top: 20%;
  width: 250px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px var(--border);
  overflow: hidden;
  z-index: 2;
`;

export const Stats = styled.div`
  font-size: 14px;
  color: #afafaf;
  text-align: center;
  padding: 5px 0;
  cursor: default;
  b {
    display: block;
  }
`;

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
    cursor: default;
  }
`;

export const PostImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostHolder = styled.div`
  width: 85px;
  height: 90px;
  background: center/cover no-repeat url(${(props) => props.background});
`;
