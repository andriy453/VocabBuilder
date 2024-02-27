import { useState, useEffect, useRef } from 'react';

import {
  Customdropdown,
  Dropdownheader,
  Dropdownlist,
  DropdownItem,
  SvgDown,
  DropdownText,
} from './Dropdown.stuled';
import sprite from '../../assets/sprite.svg';


function Dropdown({arr, value, set, height, selectedOption,modal }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (arr) => {
    set(arr);
    setIsOpen(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <Customdropdown $modal={modal}>
      <Dropdownheader onClick={toggleDropdown} ref={dropdownRef}>
        <DropdownText>{selectedOption || value}</DropdownText>
        <SvgDown $active={isOpen ? true : undefined } $modal={modal}>
          <use href={sprite + '#icon-drop'}></use>
        </SvgDown>
      </Dropdownheader>
      {isOpen && (
        <Dropdownlist $heigh={height ? height : undefined}>
          {arr && arr.map((arr, index) => (
            <DropdownItem $modal={modal} key={index} onClick={() => handleOptionClick(arr)}>
              {arr}
            </DropdownItem>
          ))}
        </Dropdownlist>
      )}
    </Customdropdown>
  );
}

export default Dropdown;
