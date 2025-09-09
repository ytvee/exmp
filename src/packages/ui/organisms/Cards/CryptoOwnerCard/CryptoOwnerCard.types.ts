/**
 * Props for the CryptoOwnerCard component
 */
export interface CryptoOwnerCardProps {
  /** Unique card identifier passed back to action callback */
  id: string | number;

  /** Additional CSS class name */
  className?: string;

  /**
   * Visual variant of the card
   * – extended — default extended view
   * – large** — large view
   * – large-content — large view with extra content
   */
  variant?: 'extended' | 'large' | 'large-content';

  /** Unique card identifier displayed in the corner */
  cardId?: string | number;

  /** Avatar image URL */
  imageURL?: string;

  /** Card title (e.g., wallet address or owner name) */
  title?: string;

  /** Whether to show the shopping‑bag icon next to the description */
  isBagIconShown?: boolean;

  /** Numeric counter (e.g., number of sales) */
  count?: number;

  /** Description text for the counter (e.g., “total sales”) */
  description?: string;

  action?: (id: string | number) => void;
}
