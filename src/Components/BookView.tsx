import {
  Card,
  CardActionButton,
  CardActions,
  CardPrimaryAction,
} from "@rmwc/card";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, ListDivider } from "rmwc";
import { booksSelector } from "../selector";
import { IBook } from "../Slices/bookSlice";

export const BookView: React.FC = () => {
  let { id } = useParams();
  const books = useSelector(booksSelector);
  const book = books.find((item: IBook) => item.id === id);
  return book ? (
    <Card outlined style={{ width: "21rem" }}>
      <Typography
        use="subtitle1"
        tag="div"
        style={{ padding: "0.5rem 1rem" }}
        theme="textSecondaryOnBackground"
      >
        {book.name}
      </Typography>

      <ListDivider />

      <div style={{ padding: "1rem" }}>
        <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
          {book.description}
        </Typography>
      </div>
    </Card>
  ) : (
    <div>Книга не найдена</div>
  );
};
