import { MenuOption } from "@contracts";

export const SaveBookOption: MenuOption = {
  description: "Save and exit",
  handler: (state) => Promise.resolve(state),
  terminate: true,
};
