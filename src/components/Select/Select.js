import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <Presentation>
        {displayedValue}
        <Icon id={'chevron-down'} size={24} />
      </Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const Presentation = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-size: 1rem;
  font-weight: 400;
  padding: 12px 52px 12px 18px;

  & .icon-svg {
    pointer-events: none;
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;

  &:focus + ${Presentation} {
    outline: 1px solid ${COLORS.primary};
  }
  &:hover + ${Presentation} {
    color: ${COLORS.black}
  }
`;

export default Select;
