import { css } from "styled-components";

// CSS Helper
//  Needed for Props in Mixins
export const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + "px"};
  left: 0;
`;
