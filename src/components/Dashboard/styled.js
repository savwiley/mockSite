import styled from "styled-components";

export const PostColumn = styled.div`
  margin: 80px auto 0;
  width: auto;
  height: fit-content;
  max-width: 614px;
`;

export const PostBlock = styled.div`
  max-height: 934px;
  border: 1px solid var(--border);
  border-radius: 3px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background: #fff;
  header {
    display: flex;
    align-items: center;
    padding: 10px;
    text-align: left;
    font-weight: bold;
    a {
      text-decoration: none;
    }
    div {
      background: center/cover no-repeat url(${(props) => props.background});
      border-radius: 50px;
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
`;

export const PostImage = styled.div`
  width: auto;
  max-width: 613px;
  height: 750px;
  border: 1px solid var(--border);
  border-right: none;
  border-left: none;
  background: center/cover no-repeat url(${(props) => props.background}), #333;
`;

//figure out if we should zoom in on the images or not

export const PostInteract = styled.div`
  font-size: 15px;
  .message,
  .date {
    width: auto;
  }
  .message {
    padding: 10px;
    width: auto;
  }
  .date {
    font-size: 12px;
    color: #555;
    padding: 0 0 5px 5px;
  }
`;

export const Interaction = styled.div`
  width: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
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
