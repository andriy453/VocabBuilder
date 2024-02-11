import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
  LogoText,
  IconWrapperNav,
  BarConteiner,
  Burger,
  ClosedBurger,
  IconWrapperx,
  BurgerPicture,
  BurgerImg,
  LinkContainer,
} from './Header.styled';
import sprite from 'assets/sprite.svg';
import { useState } from 'react';
import { selectIsLoggedIn, selectUserName } from '../../redux/Auth/selectors';

import { useSelector } from 'react-redux';
import UserBar from './UserBar/UserBar';
import UserNav from './UserNav/UserNav';

import illustrationMobile1x from '../../assets/illustration.png';
import illustrationMobile2x from '../../assets/illustration2x.png';

import illustrationDesktop1x from '../../assets/illustrationDesktop.png';
import illustrationDesktop2x from '../../assets/illustrationDesktop2x.png';

export const Header = () => {
  const [burger, setBurger] = useState('closed');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/login">
          <IconWrapper>
            <use href={`${sprite}#icon-Craftwork`} />
          </IconWrapper>
          <LogoText>VocabBuilder</LogoText>
        </StyledLink>

        {isLoggedIn ? (
          <>
            <LinkContainer>
              <UserNav />
            </LinkContainer>

            <BarConteiner>
              <UserBar userName={userName} />
              <button onClick={() => setBurger('opened')}>
                <IconWrapperNav>
                  <use href={`${sprite}#icon-Nav`} />
                </IconWrapperNav>
              </button>
            </BarConteiner>
          </>
        ) : undefined}
        <Burger display={burger}>
          <UserBar userName={userName} iconcolor={true} />
          <ClosedBurger onClick={() => setBurger('closed')}>
            <IconWrapperx>
              <use href={`${sprite}#icon-x`} />
            </IconWrapperx>
          </ClosedBurger>
          <UserNav />

          <BurgerPicture>
            <source
              srcSet={illustrationDesktop2x}
              media="(min-width: 768px) and (min-resolution: 2dppx)"
            />
            <source srcSet={illustrationDesktop1x} media="(min-width: 768px)" />
            <source
              srcSet={illustrationMobile2x}
              media="(max-width: 767px) and (min-resolution: 2dppx)"
            />
            <source srcSet={illustrationMobile1x} media="(max-width: 767px)" />
            <BurgerImg src={illustrationMobile1x} alt="User" />
          </BurgerPicture>
        </Burger>
      </Navigation>
    </HeaderContainer>
  );
};
