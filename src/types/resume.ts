import { BookItemProps } from "./book";

export interface ResumeModalProps {
  closeModal: () => void
  item: BookItemProps;
}