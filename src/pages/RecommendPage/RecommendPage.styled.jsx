
import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 32px 16px 48px 16px;
  background: rgb(248, 248, 248);

  padding: 32px 16px 48px 16px;
  @media screen and (min-width: 768px) {
    padding: 80px 32px;
  }
    @media screen and (min-width: 370px) {
    padding: 16px 24px;
  }
  @media screen and (min-height: 768px){
    height:  ${(props) => props.height ? undefined : "calc(100vh - 68px)"};
  }
  @media screen and (min-width: 768px) {
    padding: 80px 32px;
    @media screen and (min-height: 768px){
    height:  ${(props) => props.height ? undefined : "calc(100vh - 96px)"};
  }
  }
 

  @media screen and (min-width: 1440px) {
    padding: 80px 100px;
  }`