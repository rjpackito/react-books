import { RootState } from "./Slices";

export const booksSelector= (state: RootState)=> state.books.books;