import styled from "styled-components";

export const PostColumn = styled.div`
  margin: 80px auto 0;
  width: 100%;
  height: fit-content;
  max-width: 614px;
`;

export const PostBlock = styled.div`
  width: 100%;
  max-height: 934px;
  border: 1px solid var(--border);
  border-radius: 3px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #fff;
  header {
    width: 100%;
    padding: 10px;
    text-align: left;
    font-weight: bold;
    img {
      border-radius: 50px;
      width: 25px;
      height: 25px;
    }
  }
`;

export const PostImage = styled.div`
  width: 100%;
  max-height: 750px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-right: none;
  border-left: none;
  background: var(--background);
  text-align: center;
  img {
    max-width: 100%;
    max-height: 750px;
  }
`;

//figure out if we should zoom in on the images or not

export const PostInteract = styled.div`
  font-size: 15px;
  .message,
  .date {
    width: 100%;
  }
  .date {
    font-size: 12px;
    color: #555;
  }
`;
