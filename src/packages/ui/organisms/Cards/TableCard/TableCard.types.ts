import { ButtonProps } from "@atoms/Button";
import { TableProps } from "@atoms/Table";

export type TMachineStatus = 'running' | 'pending' | 'stopped' | 'deployed';


/** Author information shown at the bottom of the card */
export interface DataCardAuthor {
  avatarURL: string;
  name: string;
  createdAt: string; // e.g. "5d ago"
  authorAction?: () => void
}

/**
 * Props for the DataCard component
 */
export interface TableCardProps {
  /** Additional CSS class name */
  className?: string;

  /** Unique card identifier passed back to action callback */
  id: string | number;

  /** Main title displayed on the cover */
  /** Main title displayed on the cover */
  title?: string;

  /** Current status of the machine (e.g. running, deployed, stopped) */
  machineStatus: TMachineStatus;

  /** Cover image URL */
  mainImageURL?: string;

  /** Short descriptive text under the cover */
  description?: string;

  /** Author block shown at the bottom */
  author?: DataCardAuthor;


  table: TableProps;

  /** Click handler for the card or its cover */
  action?: (id: string | number) => void;

  /** Additional buttons shown at the bottom */
  additionalButtons?: {
    id?: string;
    label: string;
    variant?: 'primary' | 'secondary' | 'text' | 'danger';
    onClick: (id: string | number) => void;
    disabled?: boolean;
    rest?: Partial<ButtonProps>
  }[];

}
