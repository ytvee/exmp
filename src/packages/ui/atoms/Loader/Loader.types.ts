import { SizableComponentProps } from '../../types/BaseComponent.types';

export type LoaderSize = 'small' | 'large';

export interface LoaderProps extends SizableComponentProps {
  /**
   * Размер лоадера
   */
  size?: LoaderSize;
}

export const LOADER_SIZES = {
  SMALL: 'small',
  LARGE: 'large',
} as const;
