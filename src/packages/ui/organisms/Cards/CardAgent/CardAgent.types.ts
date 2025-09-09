export interface Benefits {
  type: 'comments' | 'runs' | 'likes' | 'backers' | 'price' | 'monetization' | 'accountBalance' | 'accessTime';
  value: string | number;
}

export interface CardAgentProps {
  id: string | number;
  title: string;
  prefix: string;
  content: string;
  benefits: Benefits[];
  mainImageURL: string;
  isMobile?: boolean;
  author: {
    avatarURL: string;
    name: string;
    createdAt: string;
    authorAction?: () => void
  };
  action?: (id: string | number) => void;
  variant: CardAgentVariant;
  benefitsColor?: string;
  className?: string;
}

export enum CardAgentVariant {
  INIT = 'INIT',
  LANDING = 'LANDING',
}
