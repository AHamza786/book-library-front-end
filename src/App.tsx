import React from "react";
import { Header, BookList } from "./components";
import "./App.css";

function App() {

  return (
    <div className="flex flex-col max-w-7xl mx-auto sm:p-10 py-10 px-5 h-screen">
      <Header />
      <BookList/>
    </div>
  );
}

export default App;
