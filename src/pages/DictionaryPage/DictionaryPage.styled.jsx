import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 32px 16px 48px 16px;
  background: rgb(248, 248, 248);
  height: calc(100vh - 68px);
  @media screen and (min-width: 768px) {
    height: calc(100vh - 96px);
  }
`;
