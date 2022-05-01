import { BookModel, FeatureHandler, MenuOption } from "@contracts";
import { ID_NOT_FOUND_ERROR, readInput } from "@utils";
import { booksSchema } from "./schemas";

// Format the book view
const formatBook = (book?: BookModel) => `
            ID: ${book.id}
            Title: ${book.title}
            Author: ${book.author}
            Description: ${book.description}.
`;

// Handle view book command
const viewBooksHandler: FeatureHandler = async (state) => {
  let showList = true;
  while (true) {
    const { bookId } = await readInput(
      booksSchema(
        state,
        "View Books",
        "To view details enter the book ID, to return press <Enter>.",
        showList
      )
    );

    if (!bookId) break;

    const book = state.find((el) => el.id === parseInt(bookId));

    const message = book ? formatBook(book) : ID_NOT_FOUND_ERROR;

    console.log(message);

    showList = false;
  }
  return state;
};

export const ViewBookOption: MenuOption = {
  description: "View all books",
  handler: viewBooksHandler,
};
