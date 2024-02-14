import styled from "styled-components";


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  border-radius: 30px;
  background: #fff;

  @media screen and (min-width: 768px) {
    border: 18px solid #fff;
    border-radius: 15px;
  }
`;

export const Th = styled.th`
  color: #121417;
  font-size: 16px;
  line-height: normal;
  padding: 14px;
  word-break: break-word;
  /* border-radius: 8px 0px 0px 0px; */
  border-right: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  background: rgba(133, 170, 159, 0.1);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 22px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
  span{
    font-size: 16px;
font-weight: 500;
line-height: 22px;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SvgMap = styled.svg`
  display: none;
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
    display: block;
  }

  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 32px;
  }
`;
export const SvgArrow = styled.svg`
  fill: rgba(133, 170, 159, 1);
  stroke: rgba(133, 170, 159, 1);
  width: 20px;
  height: 20px;
`;
export const SvgDate = styled.svg`
  fill: rgba(133, 170, 159, 1);
  stroke: rgba(133, 170, 159, 1);
  width: 14px;
  height: 25px;
  &:hover,
  &:focus {
    fill: #121417;
    stroke: #121417;
  }
`;

export const TextAdd = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    color: #121417;

    font-size: 14px;
    line-height: normal;
    margin-right: 6px;
    display: block;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const TextTrain = styled.p`
  color: #121417;
  font-size: 16px;
  line-height: normal;
  margin-right: 6px;
  display: block;
`;
export const Td = styled.td`
  color: #121417;
  position: relative;
  font-size: 14px;
  line-height: normal;
  padding: 14px;
  word-break: break-word;
  border-right: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  background: #fcfcfc;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 22px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  padding: 0;
  position: relative;
  &:hover,
  &:focus {
    opacity: 0.5;

    transition: all 250ms linear;
  }
`;

export const WrapperDashboards = styled.div`
  background: #f8f8f8;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  @media screen and (min-width: 375px) {
    padding: 16px 24px;
  }

  @media screen and (min-width: 768px) {
    padding: 80px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 80px 100px;
  }
`;

export const SvgStep = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(18, 20, 23, 1);
  &:disabled {
    stroke: rgba(133, 170, 159, 1);
    fill: rgba(133, 170, 159, 1);
  }
  &:hover,
  &:focus {
    stroke: #fff;
    fill: #fff;

    transition: all 250ms linear;
  }
  &.active {
    stroke: #fff;
    fill: #fff;
  }
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
export const SvgStepNext = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(18, 20, 23, 1);
  transform: rotate(180deg);
  &:disabled {
    stroke: rgba(133, 170, 159, 1);
    fill: rgba(133, 170, 159, 1);
  }
  &:hover,
  &:focus {
    stroke: #fff;
    fill: #fff;

    transition: all 250ms linear;
  }
  &.active {
    stroke: #fff;
    fill: #fff;
  }
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;


export const ButtonPagination = styled.button`
  display: flex;
  width: 22px;
  height: 22px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  color: #121417;

  font-size: 9px;
  line-height: normal;

  &:hover,
  &:focus {
    color: #fff;
    background: #85aa9f;
    transition: all 250ms linear;
  }

  &:disabled {
    color: #fff;
    background: #85aa9f;
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    padding: 10px;
    gap: 10px;
    font-size: 13px;
  }
`;

export const WrapPagination = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 23px;
  @media screen and (min-width: 768px) {
    gap: 10px;
    margin-top: 46px;
  }
`;

export const ButtonModal = styled.button`
  color: #121417;
  font-size: 16px;
  line-height: 1.5;
  gap: 8px;
  display: flex;
  background: transparent;
  border: none;
`;

export const SvgModal = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(133, 170, 159, 1);
  fill: transparent;
`;