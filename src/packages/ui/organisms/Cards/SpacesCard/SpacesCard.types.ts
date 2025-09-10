import { IconName } from "@atoms/Icon/Icon.types";
import { TableProps } from "@atoms/Table";

/**
 * Props for a single benefit line inside the DataCard
 */
export interface SpacesCardBenefitProps {
  /** Unique data‑id for tests or analytics */
  id?: string;

  /** Name of the icon to render (from the Icon component) */
  iconName?: IconName;

  /** Numeric/string value displayed next to the icon */
  count?: number | string;

  /** Optional label shown after the count */
  text?: string;

  /** Additional CSS class name */
  className?: string;

  /** Action on click on benefit */
  onClick?: () => void;
}

/** Author information shown at the bottom of the card */
export interface DataCardAuthor {
  avatarURL: string;
  name: string;
  createdAt: string; // e.g. "5d ago"
  authorAction?: () => void
}

/** All numeric stats displayed as benefits */
export interface SpacesCardBenefits {
  count: number;
  label: string;
  amount: number;
  likes: number;
  onLikeClick?: () => void;
  isLiked?: boolean;
}

export type SpacesCardBenifitsTypes = SpacesCardBenefitProps | SpacesCardBenefits;

/**
 * Props for the DataCard component
 */
export interface SpacesCardProps {
  /** Additional CSS class name */
  className?: string;

  /** Unique card identifier passed back to action callback */
  id: string | number;

  /** Main title displayed on the cover */
  title?: string;

  /** Subtitle displayed bellow the cover */
  subtitle?: string;

  /** Cover image URL */
  mainImageURL?: string;

  /** Cover gradient background (CSS gradient string) */
  mainGradient?: string;

  /** Short descriptive text under the cover */
  description?: string;

  /** Statistics shown as benefit chips */
  benefits?: SpacesCardBenefits;

  isActiveBenefits?: boolean;

  withTableStub?: boolean;

  table?: TableProps;

  /** Author block shown at the bottom */
  author?: DataCardAuthor;

  /** Click handler for the card or its cover */
  action?: (id: string | number) => void;

  /** Additional buttons shown at the bottom */
  additionalButtons?: {
    id?: string;
    label: string;
    variant?: 'primary' | 'secondary' | 'text' | 'danger';
    onClick: (id: string | number) => void;
    disabled?: boolean;
  }[];

}
