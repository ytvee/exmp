
import { IconName } from '../Icon/Icon.types';

export type StatusType = 'active' | 'rejected' | 'pending' | 'default' | 'private';

export interface StatusChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Status for dispalying
   */
  status?: StatusType;

  /** Optional castom icon  */
  iconName?: IconName;

  /**
   * Optional castom text for chip
   */
  label?: string;

  /** Id for testing */
  'data-testid'?: string;
}