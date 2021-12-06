/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper className={size}>
      <Bar progress={value} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" />
    </Wrapper>
  );
};

const Bar = styled.div`
  background-color: blue;
  border-radius: 4px ${props => props.progress > 99.8 ? '4px 4px' : '0 0'} 4px;
  height: 100%;
  width: ${props => props.progress}%;
`;

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  width: 370px;
  
  &.large {
    height: 24px;
    padding: 4px;
  }
  &.medium {
    height: 12px;
  }
  &.small {
    height: 8px;
  }
`;

export default ProgressBar;
