export type TypographyType = 'display' | 'headline' | 'body' | 'label' | 'caption';
export type TypographySize = 'large' | 'medium' | 'small';
export type TypographyWeight = 'default' | 'bold';
export type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

export interface ITypographyProps {
  children: React.ReactNode | React.ReactNode[];
  type?: TypographyType;
  size?: TypographySize;
  weight?: TypographyWeight;
  tag?: TypographyTag;
} 