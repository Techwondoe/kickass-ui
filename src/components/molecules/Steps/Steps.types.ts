/**
 * @params href - href redirect for the step item
 * @params id - unique id for step
 * @params name - Text to display with step item
 * @params status - Flag to display step status
 */
export interface StepItem {
  href: string;
  id: string;
  name: string;
  status: 'current' | 'complete' | string;
}

/**
 * @params steps - Array with StepItems
 */
export interface StepsProps extends React.HTMLAttributes<HTMLAllCollection> {
  /** Provide the steps to be rendered in the component */
  steps: StepItem[];
}
