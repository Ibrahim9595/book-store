import { CreationBookModel, FeatureHandler, MenuOption } from "@contracts";
import { readInput } from "@utils";
import { addBookSchema } from "./schemas";

// handle add book command
const addBooksHandler: FeatureHandler = async (state) => {
  console.log(`
  ==== Add a Book ====

  Please enter the following information:

  `);

  const book = await readInput<CreationBookModel>(addBookSchema());
  const newId = state.length + 1;

  console.log(`Book [${newId}] Saved`);
  return state.concat({ ...book, id: newId });
};

export const AddBookOption: MenuOption = {
  description: "Add a book",
  handler: addBooksHandler,
};
