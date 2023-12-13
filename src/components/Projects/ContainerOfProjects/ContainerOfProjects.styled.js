import styled from "vue3-styled-components";

export const Projects = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const FlexContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
