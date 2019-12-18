/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { status, position } from './types';
import { getPhysicalPosition } from './positionHelper';

const Badge = styled.span`
  ${({ theme, status }) => css`
    position: absolute;
    border-radius: ${theme.badgeBorderRadius};
    font-family: ${theme.badgeTextFontFamily};
    font-size: ${theme.badgeTextFontSize};
    font-weight: ${theme.badgeTextFontWeight};
    line-height: ${theme.badgeTextLineHeight};
    padding: ${theme.badgePadding};
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    color: ${theme[`badge${status}TextColor`]};
    background-color: ${theme[`badge${status}BackgroundColor`]};
  `}
  ${({ position, theme }) => {
    let placement = getPhysicalPosition(theme.dir, position);
    switch (placement) {
      case 'topRight':
        return 'top: 0;right: 0;';
      case 'topLeft':
        return 'top: 0;left: 0;';
      case 'bottomRight':
        return 'bottom: 0;right: 0;';
      case 'bottomLeft':
        return 'bottom: 0;left: 0;';
    }
  }}
`;
Badge.defaultProps = {
  position: 'topEnd',
  status: 'Primary'
};

Badge.propTypes = {
  position,
  status
};
export default Badge;
