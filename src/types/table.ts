import { ReactNode } from 'react';

export interface ContentMapping {
  customRender?: () => ReactNode;
  value?: string | number;
  cellStyle?: Record<string, string | number>;
}

export interface HeadingMapping extends ContentMapping {
  key?: string;
  label?: string;
}
