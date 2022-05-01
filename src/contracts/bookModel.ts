export interface BookModel {
  id: number;
  title: string;
  author: string;
  description: string;
}

export type CreationBookModel = Omit<BookModel, "id">;
