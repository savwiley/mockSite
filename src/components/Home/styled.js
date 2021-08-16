import styled from "styled-components";

export const SignInSheet = styled.div`
  margin: 12vh auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  justify-content: space-around;
  width: 300px;
  height: 400px;
  background: #fff;
  border: 1px solid var(--border);
`;

export const SignInControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SwitchScreen = styled.button`
  color: var(--blue);
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  align-self: center;
  background: transparent;
  border: none;
  outline: none;
`;
