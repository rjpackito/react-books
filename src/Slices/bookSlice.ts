// file: slices/counterSlice.js

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBook {
  id: string;
  name: string;
  countPage: string;
  description: string;
}

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: (JSON.parse(localStorage.getItem("books") as string) ??
      []) as IBook[],
  },
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    setBook: (state, action: PayloadAction<IBook>) => {
      state.books.push(action.payload);
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setBook } = booksSlice.actions;

// По умолчанию экспортируется редьюсер сгенерированный слайсом
export default booksSlice;
