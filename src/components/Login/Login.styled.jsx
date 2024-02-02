import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  padding: 32px 16px 57px;
  border-radius: 25px 25px 0px 0px;
  background-color: rgba(133, 170, 159, 0.1);

  max-width: 628px;
  @media screen and (min-width: 768px) {
    border-radius: 30px;
    padding: 48px 64px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.6px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.8px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 40px;
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;
export const TextRegister = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
  border-radius: 15px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  padding: 16px 18px 16px 18px;
  background-color: transparent;

  transition: border 300ms;

  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  &:hover,
  &:focus {
    border: 1px solid var(--grean);
    outline: none;
    opacity: 1;
    transition:
      outline 250ms linear,
      opacity 250ms linear;
  }
  &.is-invalid {
    border-color: red;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 30px;
  background-color: var(--grean);
  padding: 16px 110px;
  color: var(--white);

  margin-bottom: 16px;

  width: 100%;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;

  transition: background 300ms;

  &:hover,:focus{
    background-color:var(--grean-hover)
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const LinkRegisterOrLogin = styled(Link)`
  border: none;
  background-color: transparent;
  display: block;
  text-align: center;

  color: rgba(18, 20, 23, 0.5);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  text-decoration-line: underline;
  margin-bottom: 0px;
  transition: color 300ms;
  &:hover {
    color: var(--black);
  }
`;

export const Validation = styled.p`
  color: #d80027;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.12px;
  margin-top: 4px;
`;
export const ShowPassword = styled.button`
  position: absolute;
  right: 18px;
  top: 17px;
  background-color: transparent;
  border: none;
  padding: 0px;
`;

export const WraperDiv = styled.div`
  margin-bottom: 32px;
  position: relative;
`;
export const ConteinerInp = styled.div`
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const SvgEye = styled.svg`
  width: 20px;
  height: 20px;
  fill: #f6f6f6;
  stroke: #000000;
`;

export const Erorr = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 4px;
`;
