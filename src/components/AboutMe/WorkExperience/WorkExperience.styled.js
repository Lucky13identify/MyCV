import styled from "vue3-styled-components";

export const Header = styled.h2`
  margin-bottom: 30px;

  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const FlexContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FlexElement = styled.li`
  font-size: 16px;

  &:not(:last-child) {
    padding-bottom: 30px;
    border-bottom: 2px solid #7b7b7b;
  }
`;

export const Subtitle = styled.h3`
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const Description = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;
`;

export const ContainerDescription = styled.div`
  display: flex;
  gap: 10px;
`;

export const HeaderDescription = styled.p`
  width: 150px;
  text-align: end;
`;
