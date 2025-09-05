import styled, { css, keyframes } from 'styled-components';
import { ModalProps } from './Modal.types';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { 
    opacity: 0;
    transform: translate(-50%, -60%) scale(0.95);
  }
  to { 
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

const sizes = {
  small: css`
    width: 90%;
    max-width: 400px;
  `,
  medium: css`
    width: 90%;
    max-width: 600px;
  `,
  large: css`
    width: 90%;
    max-width: 800px;
  `
};

export const ModalContainer = styled.div<Pick<ModalProps, 'size'>>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  animation: ${slideIn} 0.3s ease-out;
  max-height: 90vh;
  overflow-y: auto;
  
  ${props => sizes[props.size || 'medium']}
  
  @media (max-width: 768px) {
    width: 95%;
    margin: 16px;
    max-height: 95vh;
  }
`;

export const ModalHeader = styled.div`
  padding: 24px 24px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6B7280;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: #F3F4F6;
    color: #374151;
  }
  
  &:focus-visible {
    outline: 2px solid #3B82F6;
    outline-offset: 2px;
  }
`;

export const ModalBody = styled.div`
  padding: 24px;
`;