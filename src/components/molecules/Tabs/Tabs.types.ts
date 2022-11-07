/**
 * @params current - flag to differentiate style
 * @params href - href redirect for the tab item
 * @params name - Text to display with tab item
 */
export interface TabItem {
  current: boolean;
  href: string;
  name: string;
}

/**
 * @params tabs - Array of TabItem
 */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: TabItem[];
}
