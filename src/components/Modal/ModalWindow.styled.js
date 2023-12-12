import styled from "vue3-styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const Close = styled.div`
  display: flex;
  padding: 3px;
  border-radius: 50%;

  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const AddingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

export const TechSkill = styled.p``;

export const ProjectNotes = styled.p`
  margin-bottom: 20px;
`;

export const FatHeader = styled.span`
  font-weight: bold;
`;

export const ProjectDescription = styled.p`
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: justify;
`;

export const TechContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  margin-bottom: 60px;
  gap: 10px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
  }
`;

export const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;

  width: 90px;
  height: 26px;
  border-radius: 6px;

  background: #c2893c;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out 0s;

  &:hover,
  &:focus {
    background: #854f04;
  }
`;
