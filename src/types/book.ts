export enum BookCategory {
  Start = 'start',
  Init = 'init',
  End = 'end',
}

export interface BookItemProps {
  _id?: string | number;
  title: string;
  author: string;
  pages: number;
  year: string;
  rating?: boolean[];
  category?: BookCategory;
  resume?: string;
  statistics?: any[];
}