import { BookModel } from "./bookModel";

/**
 * The choice of any feature handler to return the new state is to make the app more dynamic
 * Some features doesn't make sense to make changes (view, search) but to handle this I need to have clear separation between write
 * and read only handlers which will lead to a little complication
 */
export type FeatureHandler = (state: BookModel[]) => Promise<BookModel[]>;
