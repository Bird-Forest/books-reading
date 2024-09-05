export interface SidebarProps { }

export interface SidebarItemProps {
  current: boolean;
  pathname: string;
  children: React.ReactNode;
}