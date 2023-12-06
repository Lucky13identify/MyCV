import styled from "vue3-styled-components";

// import globalStyles from "../../styles/styles";

export const HeroSection = styled.div`
  padding-top: 80px;
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;

    animation-name: fadeIn;
    animation-duration: 1.5s;
  }
  @media screen and (min-width: 1200px) {
    gap: 0;
    display: flex;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const HeroInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  text-align: center;

  @media screen and (min-width: 768px) {
    display: block;
    margin-top: 0px;
    width: 720px;

    text-align: left;
  }
  @media screen and (min-width: 1200px) {
    width: 800px;
  }
`;

export const HeroName = styled.p`
  margin-bottom: 10px;

  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0px;

    font-size: 70px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0px;
  }
`;

export const HeroWork = styled.p`
  margin-bottom: 25px;

  font-size: 30px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;

    font-size: 40px;
    font-weight: 500;
    line-height: 130px;
    letter-spacing: 0px;
    margin: 0px;
  }
`;

export const HeroDescription = styled.p`
  margin: 0px;

  padding-bottom: 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0px;
`;
