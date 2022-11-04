export interface People {
  email: string;
  name: string;
  role: string;
  title: string;
}

/**
 * @params buttonText - Text to display within button
 * @params description - Additional text for the table
 * @params people - Array of People
 * @params title - Text to display with table item
 * @params upperCaseTableHeader - Flag to toggle capital letters for title
 */
export interface TableProps {
  buttonText: string;
  description: string;
  people: People[];
  title: string;
  upperCaseTableHeader?: boolean;
}
