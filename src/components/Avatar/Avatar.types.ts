export type AvatarSize = 'small' | 'medium' | 'large';

export interface IAvatarProps {
  /**
   * Image Alt text
   */
  alt: string;

  /**
   * Image Source
   */
  src: string;

  /**
   * Avatar Size
   */
  size?: AvatarSize;
}
