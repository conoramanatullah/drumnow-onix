import { IconName } from "../Icon";

export interface INavItemProps {
  children: React.ReactNode;
  icon?: IconName;
  onClick: () => void;
} 