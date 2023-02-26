import React from "react";
import { Provider } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarActionItem,
  TopAppBarNavigationIcon,
} from "rmwc";
import "./App.css";
import AddBook from "./Components/AddBook";
import { BookList } from "./Components/BookList";
import { BookView } from "./Components/BookView";
import { store } from "./Slices";

const App = () => {
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate("/add-book");
  };
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <Provider store={store}>
      <div className="App">
        <TopAppBar dense>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarActionItem icon="home" onClick={handleGoHome} />
              <TopAppBarTitle>Книги</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <TopAppBarNavigationIcon
                icon="add_card"
                onClick={handleAddCard}
              />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <div style={{ paddingTop: "3em" }}>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/view/:id" element={<BookView />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
};
export default App;
