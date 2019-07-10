import styled from "styled-components";
import { teal, elevation } from "../utilities";

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  background: ${teal};
  ${elevation[1]};
  ${(size) => {
    if(size === 'small') {
      return(
        font-size: 1rem;
        
      )
    }
  }}
`;

export const CancelButton = styled(Button)`
  background: tomato;
`;
