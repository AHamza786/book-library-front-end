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

export type State = {
  book: BookState;
};
