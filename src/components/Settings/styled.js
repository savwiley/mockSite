import styled from "styled-components";

export const SettingsStyle = styled.div`
  background: #fff;
  width: 100%;
  max-width: 975px;
  height: 120vh;
  margin: 80px auto;
  border: 1px solid var(--border);
  border-radius: 3px;
`;

export const SettingsTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto -50px;
  font-size: 20px;
  width: 0;
`;

export const SettingsPic = styled.div`
  width: 60px;
  padding-right: 10px;
  margin-bottom: 50px;
  font-size: 40px;
  .icon {
    fill: transparent;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: center/cover no-repeat url(${(props) => props.picture});
    margin-bottom: 50px;
    &:hover {
      opacity: 1;
      fill: rgba(250, 250, 250, 0.8);
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        center/cover no-repeat url(${(props) => props.picture});
    }
  }
  input {
    opacity: 0;
    font-size: 12px !important;
    cursor: pointer;
    height: 40px;
    width: 40px;
    position: relative;
    top: 50px;
    outline: none;
    ::file-selector-button {
      display: none;
    }
    &:hover ~ .icon {
      opacity: 1;
      fill: rgba(250, 250, 250, 0.4);
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        center/cover no-repeat url(${(props) => props.picture});
    }
  }
`;

export const Form = styled.div`
  width: 300px;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
  label {
    text-align: right;
    width: 100%;
    padding-right: 10px;
    font-weight: bold;
  }
  input {
    width: 100%;
    margin: 10px 0;
    &[type="button"] {
      color: #eee;
      width: fit-content;
      margin: 10px 0 20px;
      &:hover {
        color: #fff;
      }
    }
  }
  #delBtn {
    font-size: 20px;
    margin-top: 40px;
  }
`;
