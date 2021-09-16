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
  img {
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
`;

export const PostSquare = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 5px;
  background: center/cover no-repeat url(${props => props.background});
`;
