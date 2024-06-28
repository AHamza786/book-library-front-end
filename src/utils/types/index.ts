export type BookProps = {
  id?: number;
  name: string;
  price: number;
  category: string;
  description: string;
};

export type BookState = {
  book: BookProps[];
  selectedBook?: BookProps,
};

export type ModalState = {
  isModalOpen: boolean;
};

export type State = {
  book: BookState;
  modal: ModalState;
};
