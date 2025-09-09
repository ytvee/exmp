import type { IconName } from '../../../atoms/Icon/Icon.types';

export interface AgentStatusPill {
  iconName: IconName;
  label: string;
  color?: 'primary' | 'success' | 'warning';
}

export interface AdvancedAgentCardProps {
  avatarSrc: string;
  title: string;
  isHosted?: boolean;
  isRunning?: boolean;
  editedAt?: string;
  space?: string;
  spaceHref?: string;
  address?: string;
  addressHref?: string;
  agentsCount?: number | string;
  componentsCount?: number | string;
  totalCost?: string;
  isPrimary?: boolean;
  className?: string;
  onPrimary?: () => void;
  onRemove?: () => void;
}


