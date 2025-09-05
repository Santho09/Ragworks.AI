import React from 'react';
import { CardProps } from './Card.types';
import { CardContainer, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter } from './Card.styled';

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  footer,
  hoverable = false,
  clickable = false,
  onClick,
  className,
  'data-testid': dataTestId,
  ...props
}) => {
  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (clickable && onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <CardContainer
      hoverable={hoverable}
      clickable={clickable}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={className}
      data-testid={dataTestId}
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      {...props}
    >
      {(title || subtitle) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};