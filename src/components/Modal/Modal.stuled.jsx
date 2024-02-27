import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100vh;
  background-color: rgba(33, 33, 33, 0.12);
  transform: translate(-50%, -50%);
  overflow: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const StyledModal = styled.div`
  border-radius: 8px;

  background-color: #85aa9f;
  padding: 48px 64px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  border-radius: 30px;
  z-index: 9999;
  /* min-width: 335px;
  min-height: 300px; */
  max-width: 630px;
  /* @media (max-width: 374px) {
    min-width: 50%;
  } */
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  margin-left: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
   @media screen and (min-width: 768px) {
  width: 32px;
  height: 32px;
   }
  stroke: rgba(252, 252, 252, 1);
  transition: all 250ms linear;
  &:hover,
  &:focus {
    stroke: rgba(252, 252, 252, 0.5);
  }
`;
