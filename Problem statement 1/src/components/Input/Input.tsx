import React from 'react';
import { InputProps } from './Input.types';
import { InputContainer, Label, StyledInput, HelperText } from './Input.styled';

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  type = 'text',
  disabled = false,
  required = false,
  error = false,
  success = false,
  helperText,
  className,
  'data-testid': dataTestId,
  id,
  name,
  autoComplete,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <InputContainer className={className}>
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && <span style={{ color: '#EF4444' }}> *</span>}
        </Label>
      )}
      <StyledInput
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        error={error}
        success={success}
        data-testid={dataTestId}
        autoComplete={autoComplete}
        aria-invalid={error}
        aria-describedby={helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {helperText && (
        <HelperText id={`${inputId}-helper`} error={error} success={success}>
          {helperText}
        </HelperText>
      )}
    </InputContainer>
  );
};