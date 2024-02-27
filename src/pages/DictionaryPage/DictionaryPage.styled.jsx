import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 32px 16px 48px 16px;
  background: rgb(248, 248, 248);
  height: calc(100vh - 68px);
  padding: 32px 16px 48px 16px;
    @media screen and (min-width: 370px) {
    padding: 16px 24px;
  }

  @media screen and (min-width: 768px) {
        height: calc(100vh - 96px);
    padding: 80px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 80px 100px;
  }
`;
