import styled from "vue3-styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  width: 100px;

  @media screen and (min-width: 768px) {
    margin: 0;
    gap: 10px;
    width: 100px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0;
    gap: 20px;
    flex-wrap: nowrap;
    width: 200px;
  }
`;

export const Animate = styled.svg`
  width: 80px;
  height: 80px;

  fill: white;
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: var(--fill-color);
    animation-name: heartBeat;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
