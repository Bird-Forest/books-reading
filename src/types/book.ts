export interface BookItemProps {
  id: number;
  title: string;
  author: string;
  pages: number;
  year: string;
  rating?: boolean[];
  category?: string;
  resume?: string;
  statistics?: any[];
}