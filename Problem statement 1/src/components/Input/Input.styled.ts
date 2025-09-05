import styled, { css } from 'styled-components';
import { InputProps } from './Input.types';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const StyledInput = styled.input<Pick<InputProps, 'error' | 'success' | 'disabled'>>`
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.2s ease-in-out;
  outline: none;
  width: 100%;
  
  border: 2px solid ${props => {
    if (props.error) return '#EF4444';
    if (props.success) return '#10B981';
    return '#D1D5DB';
  }};
  
  background-color: ${props => props.disabled ? '#F9FAFB' : 'white'};
  color: ${props => props.disabled ? '#6B7280' : '#111827'};
  
  &::placeholder {
    color: #9CA3AF;
  }
  
  &:focus:not(:disabled) {
    border-color: ${props => {
      if (props.error) return '#EF4444';
      if (props.success) return '#10B981';
      return '#3B82F6';
    }};
    box-shadow: 0 0 0 3px ${props => {
      if (props.error) return 'rgba(239, 68, 68, 0.1)';
      if (props.success) return 'rgba(16, 185, 129, 0.1)';
      return 'rgba(59, 130, 246, 0.1)';
    }};
  }
  
  &:hover:not(:disabled):not(:focus) {
    border-color: ${props => {
      if (props.error) return '#EF4444';
      if (props.success) return '#10B981';
      return '#9CA3AF';
    }};
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

export const HelperText = styled.span<Pick<InputProps, 'error' | 'success'>>`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: ${props => {
    if (props.error) return '#EF4444';
    if (props.success) return '#10B981';
    return '#6B7280';
  }};
`;