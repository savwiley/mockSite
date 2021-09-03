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
`;

export const PostImage = styled.div`
  width: 70%;
  height: 100%;
  background: #333;
  overflow: hidden;
  text-align: center;
  align-content: center;
  img {
    max-width: 100%;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background: #fff;
  font-size: 14px;
`;

export const PostHeader = styled.div`
  border-bottom: 1px solid var(--softBorder);
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: 10px;
  }
`;

export const PostMessages = styled.div`
  padding: 15px;
  height: 59vh;
  max-height: 915px;
  overflow-y: auto;
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
  .heart {
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
  textarea, button {
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