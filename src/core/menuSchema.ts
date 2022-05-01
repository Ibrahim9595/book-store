import { MenuOption } from "@contracts";
import { InputSchema } from "@utils";

/**
 * This function create the view for displaying all options by iterating through them and displaying them by index
 */
export const menuSchema = (
  numBooks: number,
  options: MenuOption[]
): InputSchema => ({
  selectedOption: {
    name: "selectedOption",
    pattern: /[1-5]/,
    message: `The option must be a number between 1 & ${options.length}`,
    required: true,
    description: `
    Loaded ${numBooks} books into the library
  
    ==== Book Manager ====
    
    ${options
      .map(({ description }, i) => `${i + 1}) ${description}`)
      .join("\n    ")}
    
    Choose [1-${options.length}]`,
  },
});
