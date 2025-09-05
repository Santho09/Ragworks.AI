import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton, LoadingSpinner } from './Button.styled';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  children,
  onClick,
  type = 'button',
  className,
  'data-testid': dataTestId,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      className={className}
      data-testid={dataTestId}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </StyledButton>
  );
};