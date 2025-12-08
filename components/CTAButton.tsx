import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

type CTAVariant = 'messenger' | 'phone' | 'email' | 'default';

interface CTAButtonProps {
  variant?: CTAVariant;
  children: ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

/**
 * CTAButton component for consistent call-to-action buttons
 * 
 * @example
 * ```tsx
 * <CTAButton variant="messenger">
 *   Message Us on Facebook
 * </CTAButton>
 * 
 * <CTAButton variant="phone">
 *   Call: (407) 555-0123
 * </CTAButton>
 * ```
 */
export function CTAButton({
  variant = 'default',
  children,
  className = '',
  size = 'default',
  asChild = false,
}: CTAButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'messenger':
        return 'bg-[#0084FF] hover:bg-[#0073E6] text-white';
      case 'phone':
        return 'bg-green-600 hover:bg-green-700 text-white';
      case 'email':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      default:
        return 'bg-brand-accent hover:bg-brand-accent/90 text-white';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'messenger':
        return (
          <svg
            className="mr-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.45 5.51 3.717 7.213V22l3.573-1.963c.954.262 1.963.403 3.01.403 5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm.977 12.434l-2.564-2.736-5.003 2.736 5.505-5.844 2.628 2.736 4.939-2.736-5.505 5.844z" />
          </svg>
        );
      case 'phone':
        return (
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        );
      case 'email':
        return (
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Button
      className={`${getVariantStyles()} ${className}`}
      size={size}
      asChild={asChild}
    >
      {asChild ? (
        children
      ) : (
        <>
          {getIcon()}
          {children}
        </>
      )}
    </Button>
  );
}

