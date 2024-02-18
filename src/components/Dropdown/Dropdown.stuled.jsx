import styled from 'styled-components';

export const Customdropdown = styled.div`
  position: relative;
  border-radius: 14px;
  background-color: #fff;
  padding: 12px 24px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 15px;
`;

export const Dropdownheader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0px 12px;

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
  background: #ffffff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  transition: all 300ms;
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
  transition: transform 300ms;
  transform: ${(props) => props.$active && 'rotate(180deg)'};
`;
