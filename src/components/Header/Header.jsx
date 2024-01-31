import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
  LogoText,
} from './Header.styled';
import sprite from 'assets/sprite.svg';

export const Header = () => {

  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/login">
          <IconWrapper>
            <use href={`${sprite}#icon-Craftwork`} />
          </IconWrapper>
          <LogoText>
          VocabBuilder
          </LogoText>
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
