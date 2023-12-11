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
