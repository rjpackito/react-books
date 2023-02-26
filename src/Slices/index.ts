import { Action, configureStore } from "@reduxjs/toolkit";
import booksSlice, { IBook } from "../Slices/bookSlice";

const bookMiddleware =
  () => (next: (arg0: Action<unknown>) => any) => (action: Action<unknown>) => {
    if (booksSlice.actions.setBook.match(action)) {
      let booksStorage: IBook[] = [];
      if (localStorage.getItem("books")) {
        booksStorage = JSON.parse(
          localStorage.getItem("books") as string
        ) as IBook[];
      }
      booksStorage.push(action.payload);
      localStorage.setItem("books", JSON.stringify(booksStorage));
    }
    return next(action);
  };

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
