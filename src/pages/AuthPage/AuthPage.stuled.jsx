import styled from 'styled-components';

export const LogoWrap = styled.div`
  padding: 16px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  height: calc(100vh - 68px);

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    @media screen and (min-width: 768px) {
      flex-direction: column;
    }
    @media screen and (min-width: 1440px) {
      flex-direction: row;
      justify-content: center;
      gap: 0px 80px;
    }
  }
`;

export const WelcomePicture = styled.picture`
  width: 247px;
  height: 191px;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    width: 498px;
    height: 435px;
    display: flex;
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.8);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding: 16px;
  padding-bottom: 0px;
  @media screen and (min-width: 768px) {
    padding: 0px;
    margin-bottom: 0px;
  }
`;
export const TextRegister = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    color: rgba(18, 20, 23, 0.8);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    display: block;
  }
`;


export const WelcomeImg = styled.img`
  width: 247px;
  height: 191px;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    width: 498px;
    height: 435px;
    display: block;
  }
`;

export const PictureWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ id }) =>
    id === 'login' ? '34px' : id === 'register' ? '4px' : undefined};
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-top: ${({ id }) =>
      id === 'login' ? '172px' : id === 'register' ? '98px' : undefined};
    padding-bottom: 106px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px;
    margin: 0px;
  }
`;
