import React from "react";
import { StyledButton } from "./styled";

/**

 * @param {object} props
 * @param {'primary' | 'dark'} props.variant 
 * @param {React.ReactNode} props.children 
 * @param {() => void} props.onClick 
 * @param {boolean} props.disabled 
 * @param {string} props.as -
 * @param {string} props.href - 
 */
const Button = ({ children, variant = "primary", as, ...props }) => {
  return (
    <StyledButton variant={variant} as={as} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
