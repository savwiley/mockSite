import styled from "styled-components";

export const PostBlock = styled.div`
  margin: 80px auto 0;
  width: 100%;
  max-width: 975px;
  display: flex;
  flex-direction: row;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 3px;
`;

export const PostImage = styled.div`
  width: 70%;
  height: 80vh;
  max-height: 975px;
  background: #333;
  overflow: hidden;
  text-align: center;
  img {
    max-width: 100%;
    max-height: 100%;
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
  border-bottom: 1px solid var(--border);
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
`;
