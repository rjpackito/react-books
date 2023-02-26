import React from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { Card } from "rmwc";
import { IBook } from "../Slices/bookSlice";

interface IProps {
  book: IBook;
}

export const BookItem: React.FC<IProps> = (props: IProps) => {
  const { book } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(generatePath("/view/:id", { id: book.id }));
  };
  return (
    <Card onClick={handleClick}>
      <div style={{ padding: 5 }}>{book.name}</div>
    </Card>
  );
};
