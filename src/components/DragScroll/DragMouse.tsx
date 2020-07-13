import React, { forwardRef } from 'react';
import { MouseContainer } from './styled';

export interface DragMouseProps {}

export const DragMouse = forwardRef<HTMLDivElement, DragMouseProps>(
  (props, ref) => {
    return (
      <MouseContainer ref={ref} {...props}>
        drag
      </MouseContainer>
    );
  }
);
