import styled, { css, keyframes } from 'styled-components';
import { ButtonProps } from './Button.types';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const variants = {
  primary: css`
    background-color: #3B82F6;
    color: white;
    border: 2px solid #3B82F6;
    
    &:hover:not(:disabled) {
      background-color: #2563EB;
      border-color: #2563EB;
      transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,
  secondary: css`
    background-color: #64748B;
    color: white;
    border: 2px solid #64748B;
    
    &:hover:not(:disabled) {
      background-color: #475569;
      border-color: #475569;
      transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,
  outline: css`
    background-color: transparent;
    color: #3B82F6;
    border: 2px solid #3B82F6;
    
    &:hover:not(:disabled) {
      background-color: #3B82F6;
      color: white;
      transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,
  ghost: css`
    background-color: transparent;
    color: #64748B;
    border: 2px solid transparent;
    
    &:hover:not(:disabled) {
      background-color: #F1F5F9;
      color: #334155;
    }
  `
};

const sizes = {
  small: css`
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
  `,
  medium: css`
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 500;
  `,
  large: css`
    padding: 16px 32px;
    font-size: 18px;
    font-weight: 600;
  `
};

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  border-radius: 6px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  outline: none;
  
  ${props => variants[props.variant || 'primary']}
  ${props => sizes[props.size || 'medium']}
  
  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
  
  ${props => props.loading && css`
    cursor: not-allowed;
    opacity: 0.8;
  `}
`;

export const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;