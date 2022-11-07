import { ReactNode } from 'react';

export interface AttachmentItem {
  actionLabel: string;
  attachmentIcon?: ReactNode;
  label: string;
}

export interface TableItem {
  label: string;
  value: string;
}

/**
 * @params attachments - Array of dynamic texts with icons beneath table
 * @params description - Description text for the component
 * @params striped - flag to display table values
 * @params tableData - Array of text values divided in ( label + value )
 * @params title - Title text for the component
 */
export interface DescriptionListProps {
  attachments?: {
    items: AttachmentItem[];
    label: string;
  };
  description: string;
  striped?: boolean;
  tableData: TableItem[];
  title: string;
}
