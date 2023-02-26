import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardActionButton,
  CardActionButtons,
  CardActions,
  Grid,
  GridCell,
  TextField,
} from "rmwc";
import { AppDispatch } from "../Slices";
import { setBook } from "../Slices/bookSlice";
import { useNavigate } from "react-router-dom";

interface IInputCustomProps {
  label: string;
  value: string;
  callback: Function;
}

const InputCustom = (props: IInputCustomProps) => {
  return (
    <div style={{ padding: "1rem" }}>
      <TextField
        required
        label={props.label}
        maxLength={30}
        value={props.value}
        onChange={(e: { currentTarget: { value: any } }) =>
          props.callback(e.currentTarget.value)
        }
      />
    </div>
  );
};
export const AddBook: React.FC = () => {
  const [bookName, setBookName] = useState("");
  const [bookCountPage, setBookCountPage] = useState("");
  const [bookDescription, setBookDescription] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();


  const handleSave = () => {
    dispatch(
      setBook({
        id: uuidv4(),
        name: bookName,
        countPage: bookCountPage,
        description: bookDescription,
      })
    );
    navigate("/");
  };

  return (
    <>
      <Grid>
        <GridCell span={4} align="middle" />
        <GridCell span={4} align="middle">
          <Card outlined={true}>
            <InputCustom
              label="Название книги"
              value={bookName}
              callback={setBookName}
            />
            <InputCustom
              label="Количество страниц"
              value={bookCountPage}
              callback={setBookCountPage}
            />
            <InputCustom
              value={bookDescription}
              label="Описание книги"
              callback={setBookDescription}
            />

            <CardActions>
              <CardActionButtons>
                <CardActionButton onClick={handleSave}>
                  Сохранить
                </CardActionButton>
              </CardActionButtons>
            </CardActions>
          </Card>
        </GridCell>
      </Grid>
    </>
  );
};
export default AddBook;
