import { BookModel } from "@contracts";
import { InputSchema } from "@utils";

/**
 * This function abstracts the schema of the view and edit functionality and display their views
 * @param books the list of books to display
 * @param title the title of the section
 * @param footer footer of the section
 * @param showList controls to show list or only the footer
 */
export const booksSchema = (
  books: BookModel[],
  title: string,
  footer: string,
  showList: boolean
): InputSchema => ({
  bookId: {
    name: "bookId",
    pattern: /[1-5]/,
    message: `The Book ID must be a number`,
    description: `          
            ${
              showList
                ? `==== ${title} ====
            
                 ${books
                   .map((book) => `[${book.id}] ${book.title}`)
                   .join("\n\t\t ")}`
                : ""
            }
            
            ${footer}
            
            Book ID`,
  },
});

/**
 * This function abstracts creation of add book schema
 */
export const addBookSchema = (): InputSchema => {
  return {
    title: {
      name: "title",
      description: "Title",
      pattern: /^[0-9a-zA-Z- ]+$/,
      required: true,
    },
    author: {
      name: "author",
      description: "Author",
      pattern: /^[a-zA-Z- ]+$/,
      required: true,
    },
    description: {
      name: "description",
      description: "Description",
      pattern: /^[a-zA-Z- ]+$/,
      required: true,
    },
  };
};

/**
 * This function abstracts creation of edit book schema
 */
export const editBookSchema = (book: BookModel): InputSchema => {
  return {
    title: {
      name: "title",
      description: `Title [${book.title}]`,
      pattern: /^[0-9a-zA-Z- ]+$/,
    },
    author: {
      name: "author",
      description: `Author [${book.author}]`,
      pattern: /^[a-zA-Z- ]+$/,
    },
    description: {
      name: "description",
      description: `Description [${book.description}]`,
      pattern: /^[a-zA-Z- ]+$/,
    },
  };
};

/**
 * This function abstracts creation of edit book schema
 * the minimum keyword length 2 characters not to match single character only
 */
export const searchBookSchema = (): InputSchema => ({
  searchQuery: {
    name: "searchQuery",
    minLength: 2,
    message: "The keyword must have at least 2 characters",
    description: `
    ==== Search ====
  
    Type in one or more keywords to search for
    
        Search`,
    required: true,
  },
});
