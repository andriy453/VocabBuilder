import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 16px 0px;

  @media screen and (min-width: 768px) {
    padding: 20px 0px;
  }
  @media screen and (min-width: 768px) {
    padding: 24px 0px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  @media screen and (min-width: 768px) {
    padding: 0px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px 100px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0px 8px;
  @media screen and (min-width: 375px) {
    gap: 0px 16px;
  }
`;

export const IconWrapper = styled.svg`
  width: 36px;
  height: 36px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
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

export const IconWrapperNav = styled.svg`
  stroke: currentColor;
  width: 40px;
  height: 28px;

`;

export const BarConteiner = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 375px) {
    gap: 8px;
  }
    @media screen and (min-width: 768px) {
          gap: 28px;
    }
  button {
    background-color: transparent;
    border: none;
    padding: 0px;
        @media screen and (min-width: 1440px) {
        display: none;
        }
  }
`;

export const Burger = styled.div`
  position: fixed;
  right: 0px;
  width: 185px;
  top: 0px;
  z-index: 1;
  height: 100%;
  padding: 16px 16px 0px 16px;
  transition: transform 0.5s cubic-bezier(0.85, 0.58, 0.59, 1.1) 0s;
  justify-content: center;
  overflow: hidden;
  transform: ${(props) =>
    props.display === 'closed'
      ? 'translate(300px);'
      : props.display === 'opened'
      ? 'translateY(0);'
      : null};
  background-color: var(--grean);
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const ClosedBurger = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  padding: 0px;
  top: 16px;
  right: 16px;
`;

export const IconWrapperx = styled.svg`
  display: inline-block;
  width: 32px;
  height: 32px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const BurgerPicture = styled.picture`
  width: 363px;
  height: 318px;
  position: absolute;

  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    width: 498px;
    height: 435px;
  }
`;

export const BurgerImg = styled.img`
  width: 363px;
  height: 318px;
  @media screen and (min-width: 768px) {
    width: 498px;
    height: 435px;
  }
`;

export const LinkContainer = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display:block;
  }
`

