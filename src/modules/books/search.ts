import { FeatureHandler, MenuOption } from "@contracts";
import { readInput } from "@utils";
import { searchBookSchema } from "./schemas";
import { ViewBookOption } from "./view";

const searchBooksHandler: FeatureHandler = async (state) => {
  const { searchQuery } = await readInput<{ searchQuery: string }>(
    searchBookSchema()
  );

  // Check if there is a word that matches the keyword in (title, author or description)
  const filteredBooks = state.filter(
    (el) =>
      el.author.search(searchQuery) !== -1 ||
      el.description.search(searchQuery) !== -1 ||
      el.title.search(searchQuery) !== -1
  );

  // Reuse the view book functionality on the filtered portion
  await ViewBookOption.handler(filteredBooks);

  return state;
};

export const SearchBookOption: MenuOption = {
  description: "Search for a book",
  handler: searchBooksHandler,
};
