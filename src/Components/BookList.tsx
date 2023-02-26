import React from "react";
import { useSelector } from "react-redux";
import { Grid, GridCell } from "rmwc";
import { booksSelector } from "../selector";
import { IBook } from "../Slices/bookSlice";
import { BookItem } from "./BookItem";

export const BookList: React.FC = () => {
  const books = useSelector(booksSelector);

  return (
    <Grid>
      {books.map((item: IBook) => (
        <GridCell key={item.id}>
          
          <BookItem key={item.id} book={item} />
        </GridCell>
      ))}
    </Grid>
  );
};
