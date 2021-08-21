import styled from "styled-components";

export const ProfileHeader = styled.div`
  width: 100%;
  height: 20vh;
  text-align: center;
  border-bottom: 1px solid var(--border);
  background: #fff;
  font-size: 30px;
  font-weight: bold;
  padding: 1em 0;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50px;
  }
`;

export const ProfilePosts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PostSquare = styled.div`
  width: 33%;
  margin: 10px;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  img {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
  }
`;
