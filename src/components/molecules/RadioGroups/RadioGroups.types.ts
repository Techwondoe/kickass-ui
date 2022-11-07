///// Card Props
/**
 * @params description - Additional text
 * @params id - Unique id for the list
 * @params title - Main text in list
 * @params users - Additional text
 */
export interface RadioCardMailingItem {
  description: string;
  id: number;
  title: string;
  users: string;
}

/**
 * @params mailingLists - Array with RadioCardMailingItem
 * @params title - Main text for the component
 */
export interface RadioCardProps {
  mailingLists: RadioCardMailingItem[];
  title: string;
}

/**
 * @params details - Additional text for the component
 * @params label - Main text for the component
 * @params plans - Array of Object containing inStock as UI flag and name as the text to be displayed
 */
export interface SmallCardsProps {
  details: string;
  label: string;
  memoryOptions: {
    inStock: boolean;
    name: string;
  }[];
}

/**
 * @params label - Main text for the component
 * @params plans - Array of Object containing multiple string params
 */
export interface StackedCardsProps {
  label: string;
  plans: {
    cpus: string;
    disk: string;
    name: string;
    price: string;
    ram: string;
  }[];
}

////// Color Picker Props
/**
 * @params bgColor - Background color code
 * @params name - Main text for the list item
 * @params selectedColor - Selected color code
 */
export interface RadioColorItem {
  bgColor: string;
  name: string;
  selectedColor: string;
}

/**
 * @params colors - Array with RadioColorPickerProps
 * @params label - Main text for the component
 */
export interface RadioColorPickerProps {
  colors: RadioColorItem[];
  label: string;
}

////// List Props
/**
 * @params description - Additional text for the item
 * @params id - Unique item for the item
 * @params name - Main text for the item
 */
interface RadioPlanItem {
  description?: string;
  id: string;
  name: string;
}

/**
 * @params settings - Array with RadioColorPickerProps
 * @params title - Main text for the component
 */
export interface RadioListWithDescriptionProps extends React.HTMLAttributes<HTMLInputElement> {
  settings: RadioPlanItem[];
  title: string;
}

/**
 * @params description - Additional text for the component
 */
export interface ListWithRadioOnRightProps extends RadioListWithDescriptionProps {
  description?: string;
}

export type SimpleRadioListProps = ListWithRadioOnRightProps;

///// Table Props
/**
 * @params label - Additional text for the component
 * @params plans - Array of Object containing limit and name as string params, prices as number params
 */
export interface SimpleTableProps {
  label: string;
  plans: {
    limit: string;
    name: string;
    priceMonthly: number;
    priceYearly: number;
  }[];
}
