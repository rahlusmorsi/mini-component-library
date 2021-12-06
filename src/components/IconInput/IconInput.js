import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper width={width} className={size}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input placeholder={placeholder} />
      <Icon id={icon} size={size === 'small' ? 11 : 16} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 2px solid ${COLORS.black};
  font-size: 18px;
  padding: 7px;
  position: relative;
  width: ${props => props.width}px;

  &.small {
    border-width: 1px;
    font-size: 14px;
    padding: 4px;
  }

  & .icon-svg {
    color: ${COLORS.gray700};
    display: inline-block;
    pointer-events: none;
  }
`;

const Input = styled.input`
  color: ${COLORS.gray700};
  font-weight: 700;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding-left: 28px;


  ${Wrapper}.small & {
    padding-left: 20px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 4px;
  }

  &:hover {
    color: ${COLORS.black};

    + .icon-svg {
      color: ${COLORS.black};
    }
  }
  
`;

export default IconInput;
