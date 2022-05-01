import { BookModel } from "@contracts";
import { readFileSync, writeFileSync } from "fs";
import { DB_PATH } from "./constants";

export const readFromDb = () => {
  const data = readFileSync(DB_PATH).toString();

  return JSON.parse(data) as BookModel[];
};

export const writeToDb = (data: BookModel[]) => {
  writeFileSync(DB_PATH, JSON.stringify(data));
};
