/**
 * Props for the DataCard component
 */
export interface ConfigAgentsCardProps extends  React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS class name */
  className?: string;

  /** Main title displayed on the cover */
  title?: string;

  /** Cover image URL */
  mainImageURL?: string;

  /** Text on the cover image */
  imgTitle?: string;

  status?: React.ReactNode;

  /** Cover gradient background (CSS gradient string) */
  mainGradient?: string;

  /** Short descriptive text under the cover */
  description?: string;

  /** Additional buttons shown at the bottom */
  additionalButtons?: React.ReactNode[];

}
