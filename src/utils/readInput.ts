import prompt, { Schema } from "prompt";

export type InputSchema = Schema["properties"];

export const readInput = async <T>(schema: InputSchema): Promise<T> => {
  prompt.start();

  return (await prompt.get({ properties: schema })) as any as T;
};

