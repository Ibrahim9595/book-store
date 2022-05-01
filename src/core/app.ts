import { BookModel } from "@contracts";
import { readFromDb, readInput, writeToDb } from "@utils";
import { menuSchema } from "./menuSchema";
import options from "@modules";

export const app = async () => {
  let state: BookModel[] = [];
  try {
    state = readFromDb();
    while (true) {
      const { selectedOption } = await readInput<{ selectedOption: string }>(
        menuSchema(state.length, options)
      );

      // Break incase of
      if (!selectedOption) break;

      const option = options[parseInt(selectedOption) - 1];

      if (!option) {
        console.log("Invalid option");
        continue;
      }

      // Terminate if the option is a terminate option in our case (Save and Exit)
      if (option.terminate) break;

      state = await option.handler(state);
    }
  } catch (error) {
    console.error(error);
  } finally {
    // Write to database in case of exit or in case of error
    writeToDb(state);
    console.log("\n    Library saved.");
  }
};
