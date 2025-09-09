export interface AvatarGroupProps {
  /** Array of avatar image URLs */
  avatars: string[];
  
  /** Maximum number of avatars to display */
  maxVisible?: number;
  
  /** Number of remaining avatars to show in the +N indicator */
  remainingAvatars?: number;

  /** Additional CSS class name */
  className?: string;
} 