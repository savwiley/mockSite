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
    padding: 0 10px;
  }
  a {
    text-decoration: none;
  }
  h1 {
    display: block;
    font-size: 25px;
    width: 28%;
    cursor: pointer;
    @media (max-width: 400px) {
      display: none;
    }
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
    @media (max-width: 800px) {
      width: 40%;
    }
    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;

export const NavBarIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 25px;
  width: 15%;
  svg {
    cursor: pointer;
  }
  button {
    background: transparent;
    border: none;
    font-size: 25px;
    padding: 0;
    outline: none;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
//width is 28% with all icons included

export const UserButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const UserPic = styled.div`
  background: center/cover no-repeat url(${(props) => props.background});
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
  left: 78%;
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

export const SearchDropStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 450px;
  position: absolute;
  top: 54px;
  left: 30%;
  font-size: 14px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px var(--border);
  overflow: hidden;
  padding: 14px 16px;
  @media (max-width: 800px) {
    width: auto;
    height: 450px;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0;
  }
`;

export const SearchHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  h4 {
    font-size: 18px;
  }
  span {
    color: var(--blue);
    font-weight: bold;
    cursor: pointer;
  }
`;

export const SearchResults = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const SearchItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  padding: 5px;
  .icon {
    fill: transparent;
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 50px;
    background: center/cover no-repeat url(${(props) => props.image});
    margin-right: 10px;
    &:hover {
      fill: rgba(250, 250, 250, 0.8);
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        center/cover no-repeat url(${(props) => props.image});
    }
  }
  &:hover {
    background: var(--background);
  }
`;

export const LikeDropStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 54px;
  left: 60%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px var(--border);
  max-height: 362px;
  min-height: 100px;
  overflow-y: auto;
  min-width: 300px;
  padding: 12px;
  font-size: 14px;
  cursor: default;
`;

export const EachLike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  width: 100%;
  height: fit-content;
  div {
    background: center/cover no-repeat url(${(props) => props.userPic});
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }
`;

export const PreviewLikePic = styled.div`
  float: right;
  max-height: 100%;
  div {
    background: center/cover no-repeat url(${(props) => props.imagePic});
    max-height: 100%;
    border-radius: 0;
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
    @media (max-width: 800px) {
      width: auto;
      height: 100vh;
      border-radius: 0;
      margin: 0;
    }
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
  @media (max-width: 800px) {
    grid-template-rows: 70% 1fr;
    grid-template-columns: 100%;
    grid-template-areas: "image" "message";
    overflow: auto;
  }
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
  @media (max-width: 800px) {
    max-width: 100%;
    max-height: 100%;
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
    @media (max-width: 800px) {
      display: block;
    }
  }
  input {
    margin: 0 5px;
    height: fit-content;
    width: fit-content;
    @media (max-width: 800px) {
      margin: 2px;
    }
  }
  @media (max-width: 800px) {
    margin: 0 auto;
    width: 50vw;
    padding: 0;
  }
`;

export const MenuButton = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    font-size: 25px;
  }
  @media (max-width: 400px) {
    padding-right: 10px;
  }
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  background: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 50%;
  border-right: 1px solid var(--border);
  overflow-x: auto;
  overflow-y: hidden;
  padding: 5px;
  svg {
    cursor: pointer;
    font-size: 25px;
    padding-right: 10px;
  }
  h2 {
    font-family: var(--header);
    font-weight: normal;
    width: 100%;
    font-size: 28px;
    text-align: center;
  }
  a {
    text-decoration: none;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    &:hover {
      background: var(--background);
    }
  }
  @media (max-width: 400px) {
    right: 0;
  }
`;

export const PostLink = styled.div`
  padding: 20px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background: var(--background);
  }
`;
