import styled from "vue3-styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const Close = styled.button`
  display: flex;
  padding: 3px;
  border-radius: 50%;

  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: auto;
  width: 200px;
`;
