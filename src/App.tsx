import React from "react";
import "./App.css";
import Header from "./components/header";
import BookCard from "./components/bookCard";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./types";

function App() {
  const books = useSelector((state: State) => state.book.book);

  return (
    <div className="flex flex-col max-w-7xl mx-auto sm:p-10 py-10 px-5 h-screen">
      <Header />
      <BookCard />
    </div>
  );
}

export default App;
