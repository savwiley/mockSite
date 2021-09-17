import styled from "styled-components";

export const ProfileHeader = styled.div`
  margin: 55px auto 0;
  width: 100%;
  height: 20vh;
  border-bottom: 1px solid var(--border);
  background: #fff;
  font-size: 30px;
  font-weight: bold;
  padding: 1em 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  div {
    background: center/cover no-repeat url(${(props) => props.background});
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const PostSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0;
  a {
    text-decoration: none;
  }
`;

export const PostSquare = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 5px;
  background: center/cover no-repeat url(${(props) => props.background});
`;

export const PostOverlay = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  font-weight: bold;
  font-size: 22px;
  div, path {
    color: #fff;
  }
  ${PostSquare}:hover & {
    display: flex;
  }
`;