export interface UserProfileProps {
  avatar?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
  subTitle: string;
}

export const nameSizes = {
  sm: 'sm',
  md: 'sm',
  lg: 'md',
  xl: 'lg',
};

export const roleSizes = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
  xl: 'md',
};
