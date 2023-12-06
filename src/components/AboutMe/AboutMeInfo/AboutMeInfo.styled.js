import styled from "vue3-styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 100%;
  text-align: justify;
`;

export const Header = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  text-align: left;
`;

export const Text = styled.p`
  margin: 0;
  text-align: left;

  @media screen and (min-width: 768px) {
    text-align: justify;
  }
`;
