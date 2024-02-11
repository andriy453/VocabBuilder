import styled from 'styled-components';

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
`;

export const UserText = styled.p`
  color: ${(props) => (props.iconcolor ? 'var(--white)' : 'rgb(18, 20, 23)')};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;

  @media screen and (min-width: 375px) {
    margin-right: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin-right: 16px;
  }
`;

export const ContainerSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: ${(props) =>
    props.iconcolor ? 'var(--white)' : 'rgb(133, 170, 159) '};
  width: 36px;
  height: 36px;
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const UserSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(props) =>
    props.iconcolor ? 'rgb(133, 170, 159) ' : 'var(--white)'};
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px; 
  }
`;
