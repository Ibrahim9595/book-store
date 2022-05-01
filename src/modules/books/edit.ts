import { CreationBookModel, FeatureHandler, MenuOption } from "@contracts";
import { ID_NOT_FOUND_ERROR, readInput } from "@utils";
import { booksSchema, editBookSchema } from "./schemas";

// handle edit book command
const editBooksHandler: FeatureHandler = async (state) => {
  let books = state.slice(0); // create a new copy
  let showList = true;
  while (true) {
    const { bookId } = await readInput(
      booksSchema(
        state,
        "Edit a Book",
        "Enter the book ID of the book you want to edit; to return press <Enter>.",
        showList
      )
    );

    // Enter was pressed
    if (!bookId) break;

    const book = state.find((el) => el.id === parseInt(bookId));

    // The book wasn't found
    if (!book) {
      console.log(ID_NOT_FOUND_ERROR);
      continue;
    }

    const updatedBook = await readInput<CreationBookModel>(
      editBookSchema(book)
    );

    // search for the selected book and update it
    books = books.map((el) =>
      el.id === book.id
        ? {
            id: book.id,
            title: updatedBook.title || book.title,
            author: updatedBook.author || book.author,
            description: updatedBook.description || book.description,
          }
        : el
    );

    console.log("Book saved.");

    showList = false;
  }

  // return the new updated books;
  return books;
};

export const EditBookOption: MenuOption = {
  description: "Edit a book",
  handler: editBooksHandler,
};
