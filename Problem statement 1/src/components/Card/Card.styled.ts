import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';

export const CardContainer = styled.div<Pick<CardProps, 'hoverable' | 'clickable'>>`
  background: white;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  
  ${props => (props.hoverable || props.clickable) && css`
    &:hover {
      box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transform: translateY(-2px);
      border-color: #D1D5DB;
    }
  `}
  
  ${props => props.clickable && css`
    cursor: pointer;
    
    &:active {
      transform: translateY(-1px);
    }
  `}
`;

export const CardHeader = styled.div`
  padding: 24px 24px 0 24px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const CardSubtitle = styled.p`
  font-size: 16px;
  color: #6B7280;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const CardBody = styled.div`
  padding: 24px;
`;

export const CardFooter = styled.div`
  padding: 0 24px 24px 24px;
  border-top: 1px solid #F3F4F6;
  margin-top: 16px;
  padding-top: 16px;
`;