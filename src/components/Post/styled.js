import styled from "styled-components";

export const PostBlock = styled.div`
  margin: 80px auto 0;
  width: 100%;
  max-width: 975px;
  height: 80vh;
  max-height: fit-content;
  display: flex;
  flex-direction: row;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 3px;
  overflow: hidden;
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    max-height: auto;
  }
`;

export const PostImage = styled.div`
  width: 70%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  align-content: center;
  display: flex;
  justify-content: center;
  background: center/contain no-repeat url(${(props) => props.background}), #333;
  &:hover {
    background: center/cover no-repeat url(${(props) => props.background});
  }
  @media (max-width: 800px) {
    width: auto;
    height: 80vh;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background: #fff;
  font-size: 14px;
  @media (max-width: 800px) {
    width: auto;
  }
`;

export const PostHeader = styled.div`
  border-bottom: 1px solid var(--softBorder);
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  a {
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  div {
    background: center/cover no-repeat url(${(props) => props.background});
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: 10px;
    outline: none;
    cursor: default;
  }
`;

export const PostMessages = styled.div`
  padding: 15px;
  height: 59vh;
  max-height: 915px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 10px;
  }
  a {
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const OwnerMessage = styled.div`
  display: block;
  width: 100%;
  padding: 10px;
  a {
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Interaction = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid var(--softBorder);
  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
  .disliked {
    fill: #fff;
    stroke: #000;
    stroke-width: 30;
    margin-right: 10px;
  }
  .liked {
    fill: #ed6175;
    margin-right: 10px;
  }
`;

export const CommentSpace = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  border-top: 1px solid var(--softBorder);
  align-items: center;
  font-size: 14px;
  textarea,
  button {
    outline: none;
    border: none;
    background: none;
  }
  textarea {
    width: 100%;
    padding: 10px;
    resize: none;
    height: 18px;
  }
  button {
    width: 20%;
    color: var(--softBlue);
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(142, 142, 142);
  padding: 0 10px 10px;
  line-height: 25px;
  font-size: 11px;
  text-transform: uppercase;
  b {
    color: rgb(38, 38, 38);
    font-size: 14px;
    text-transform: initial;
  }
`;

export const DeleteButton = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: red;
  color: #fff;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background: #a10000;
  }
`;
