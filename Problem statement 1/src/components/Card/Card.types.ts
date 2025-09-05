export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  'data-testid'?: string;
}