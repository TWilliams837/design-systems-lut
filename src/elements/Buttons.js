import styled from "styled-components";
import { teal, elevation } from "../utilities";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
  font-size: 1rem;
  padding: 3px 10px;
  `,
  cancel: ({ theme }) => `
  background: ${theme.colors.secondary};
  `
};

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  background: ${props => props.theme.colors.primary};
  transition: 0.3s ease box-shadow;
  ${elevation[1]};
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
  &:hover {
    ${elevation[2]};
  }
`;

export const CancelButton = styled(Button)`
  background: ${props => props.theme.colors.secondary};
`;
