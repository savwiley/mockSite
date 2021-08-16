import styled from 'styled-components';

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
  margin: 50px 10px 10px;
  font-size: 20px;
`;

export const SettingsPic = styled.div`
  width: 48%;
  text-align: right;
  padding-right: 30px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;

export const Form = styled.div`
  width: 300px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
  label {
    text-align: right;
    width: 100%;
    padding-right: 10px;
    font-weight: bold;
  }
  input {
    width: 100%;
    &[type="button"] {
      width: fit-content;
    }
  }
`;
