import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top:170px;
  gap: 8px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-top:0px;
  }
`;
export const StyledLink = styled(Link)`
  display: inline;
  padding: 12px 20px;
  border-radius: 15px;

  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  transition:all 300ms;
  color: ${({ activ }) =>  activ === 'active'  ? ' var(--black)': ' var(--white)' };
  background-color:${({ activ }) =>  activ === 'active'  ? 'var(--white)': 'transparent' };
  &:hover{
    background-color:var(--white);
    color: currentColor;
  }

  @media screen and (min-width: 375px) {
    gap: 0px 16px;
  }

  @media screen and (min-width: 1440px) {
    color: var(--black);
  color: ${({ activ }) =>  activ === 'active'  ? 'var(--white)': ' var(--black)' };
  background-color:${({ activ }) =>  activ === 'active'  ? 'var(--grean)': 'transparent' };

  &:hover{
    background-color:var(--grean);
    color:  var(--white);
  }
  }
`;