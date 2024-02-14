import styled from 'styled-components';

export const InputWord = styled.input`
  padding: 12px 24px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 15px;
  width: 100%;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
export const ContainerInp = styled.div`
  position: relative;
`;

export const SvgSearch = styled.svg`
  position: absolute;
  fill: transparent;
  stroke: #000000;
  width: 20px;
  height: 20px;
  top: 12px;
  right: 24px;
`;


export const SvgDown = styled.svg`
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: transparent;
  transition: transform 300ms;
  transform: ${(props) => props.$active && 'rotate(180deg)'};
`;

export const StyledRadio = styled.input`
  appearance: none;
  margin: 0;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(18, 20, 23, 0.2);
  border-radius: 50%;
  transition: all 0.3ms;
  cursor: pointer;
  box-sizing: border-box;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 2px;
  }
  &:checked::after {
    background-color: rgba(133, 170, 159, 1);
  }
  &:hover::after {
    background-color: rgba(133, 170, 159, 1);
  }
  &:focus {
    border: 2px solid rgba(133, 170, 159, 1);
    outline: none;
  }
`;
export const StyledLabel = styled.label`
  color: #121417;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  cursor: pointer;
  align-items: center;

  gap: 8px;
`;
export const WrapRadioBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
