import { ReactNode } from 'react';

export interface ContentMapping {
  customRender?: () => ReactNode;
  value?: string;
  cellStyle?: any;
}

export interface HeadingMapping extends ContentMapping {
  key?: string;
  label?: string;
}
