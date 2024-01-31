import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 16px 0px;

  @media screen and (min-width: 768px) {
    padding: 20px 0px  ;
  }
  @media screen and (min-width: 768px) {
    padding: 24px 0px  ;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 16px;
  @media screen and (min-width: 768px) {
    padding: 0px  32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px  100px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0px 16px;
`;

export const IconWrapper = styled.svg`
  width: 36px;
  height: 36px;
`;
export const LogoText = styled.p`
  color: var(--black);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    font-weight: 600;
    line-height: 1.4;
  }
`;
