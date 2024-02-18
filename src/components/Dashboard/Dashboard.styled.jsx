import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 28px;
  }
    @media screen and (min-width: 1440px) {
        margin-bottom: 0px;
    }
  margin-bottom: 40px;
`;
export const Wrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

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

export const Customdropdown = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 14px;
  background-color: #fff;
`;

export const Dropdownheader = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 50px;
  padding: 14px 18px 14px 18px;
  cursor: pointer;
  border-radius: 14px;
`;
export const DropdownText = styled.p`
  color: var(--secondary);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin: 0px;
`;

export const Dropdownlist = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px 0px;

  width: 100%;
  padding: 14px 8px 14px 18px;

  overflow: auto;

  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: var(--background);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;
export const DropdownItem = styled.li`
  cursor: pointer;
  transition: color 300ms;
  color: rgba(18, 20, 23, 0.2);

  width: 100%;
  &:hover {
    color: var(--secondary);
  }
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

export const StudyDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const KeyText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const ValueText = styled.p`
  color: #121417;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    gap: 16px;
  }
`;
export const WrapRightBtn = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  position: relative;
  &:hover,
  &:focus {
    opacity: 0.5;
    transition: all 250ms linear;
  }
`;
export const TextTrain = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-right: 6px;
  display: block;
`;
export const SvgArrow = styled.svg`
  width: 20px;
  height: 20px;
`;
