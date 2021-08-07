import styled from "styled-components";

export const NavBarStyle = styled.div`
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
  h1 {
    display: block;
    font-size: 25px;
    width: 28%;
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
