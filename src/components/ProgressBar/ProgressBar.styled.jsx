import styled from "styled-components";


export const ProgressWrap = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  text-align: center;
  justify-content: center;
  top: 40px;
  right: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 34px;
  }
`;

export const TextInCirc = styled.p`
  position: absolute;
  /* right: 0px;
  top: 0px; */
  display: flex;

  justify-content: flex-end;
  color: #121417;
  font-size: 10px;
  line-height: 1.5;
`;