import styled from "styled-components";

export const NavBarStyle = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 54px;
  border-bottom: 1px solid var(--border);
  .inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 975px;
    margin: auto;
  }
  a {
    text-decoration: none;
  }
  h1 {
    display: block;
    font-size: 25px;
    width: 28%;
    cursor: pointer;
  }
  input {
    height: 2ch;
    width: 20%;
    font-size: 15px;
    text-align: center;
    background: var(--background);
    &:focus {
      text-align: left;
    }
  }
`;

export const NavBarIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 25px;
  width: 28%;
  svg {
    cursor: pointer;
  }
`;

export const UserButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const UserPic = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50px;
`;

export const DropDownStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  background: #fff;
  width: 200px;
  position: absolute;
  top: 54px;
  margin-left: 8%;
  border-radius: 8px;
  box-shadow: 0 0 8px var(--border);
  overflow: hidden;
  a {
    text-decoration: none;
    padding: 10px;
    &:hover {
      background: var(--background);
    }
  }
`;

export const LikeDropStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 54px;
  left: 45%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px var(--border);
  max-height: 362px;
  min-height: 100px;
  overflow-y: auto;
  width: 500px;
  padding: 12px;
  font-size: 14px;
`;

export const EachLike = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
  width: 100%;
  height: fit-content;
  img {
    width: 25px;
    height: 25px;
    border-radius: 50px;
    margin-right: 8px;
  }
`;

export const PreviewLikePic = styled.div`
  float: right;
  max-height: 100%;
  img {
    max-height: 100%;
  }
`;

export const PostModal = styled.div`
  z-index: 2;
  background: rgba(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .inner {
    width: 80vw;
    max-width: 100ch;
    height: 90vh;
    max-height: 900px;
    background: #fff;
    border-radius: 15px;
    margin-top: 2.5%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  input {
    background: var(--blue);
    color: #fff;
  }
`;

export const PostTop = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: row;
  h2 {
    font-size: 20px;
    padding: 15px 0;
    width: 96%;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 30px;
`;

export const ChoosePic = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    background: var(--blue);
    font-size: 14px;
    padding: 8px 10px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const AcceptPic = styled(ChoosePic)`
  flex-direction: column;
  text-align: center;
  .previewBtns {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 20vw;
    margin-top: 50px;
    input {
      width: fit-content;
      height: fit-content;
      font-size: 25px;
    }
  }
`;

export const PreviewPic = styled.div`
  max-width: 70vw;
  max-height: 50vh;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CreateMessage = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: fit-content(1fr) 50%;
  grid-template-areas: "image message";
  overflow: hidden;
`;

export const MessagePic = styled.div`
  max-width: 80%;
  max-height: 80%;
  padding: 1rem;
  grid-area: image;
  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
`;

export const MessageCenter = styled.div`
  z-index: 2;
  height: fit-content;
  grid-area: message;
  margin: auto;
  width: 40vw;
  text-align: center;
  padding-right: 3rem;
  textarea {
    width: 100%;
    height: 12vh;
    margin-bottom: 10px;
    border: 1px solid var(--border);
    outline: none;
    border-radius: 5px;
    padding: 3px;
  }
  input {
    margin: 0 5px;
    height: fit-content;
    width: fit-content;
  }
`;
