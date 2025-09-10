import { IconName } from "@atoms/Icon/Icon.types";

/**
 * Props for a single benefit line inside the DataCard
 */
export interface OverviewCardStatisticProps {
  /** Unique data‑id for tests or analytics */
  id?: string;

  /** Numeric/string value displayed next to the icon */
  count: number | string;

  /** Optional label shown after the count */
  text: string;
}

/**
 * Props for the DataCard component
 */
export interface OverviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS class name */
  className?: string;

  /** Index of the card in a list, used for icon gradients */
  index?: number;

  /** Unique card identifier passed back to action callback */
  id?: string;

  /** Main title */
  title: string;

  /** Icon name to display in the header */
  iconName?: IconName;

  /** Icon component to display in the header */
  icon?: React.ReactNode;

  /** Short descriptive text under the cover */
  description?: string;

  /** Statistics shown as benefit chips */
  stats?: OverviewCardStatisticProps[];

  /** Click handler for the card or its cover */
  action?: (id: string | number) => void;

  /** Additional buttons shown at the bottom */
  buttons?: {
    id?: string;
    label: string;
    variant?: 'primary' | 'secondary' | 'text' | 'danger';
    onClick: (id: string | number) => void;
    disabled?: boolean;
  }[];

}
