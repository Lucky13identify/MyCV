import styled from "vue3-styled-components";

export const Container = styled.div`
  width: 200px;
  padding: 0;
  gap: 30px;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    width: 160px;
    gap: 20px;
  }
`;

export const Flag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  border-radius: 5px;

  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const FlagContainer = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 1200px) {
    gap: 10px;
  }
`;
