import React from "react";
import { useSelector } from "react-redux";
import { Header, BookList, Form, Modal } from "./components";
import { State } from "./utils";
import "./App.css";

function App() {
  const { isModalOpen } = useSelector((state: State) => state.modal);

  return (
    <div className="flex flex-col max-w-7xl mx-auto sm:p-10 py-10 px-5 h-screen">
      <Header />
      <BookList />
      {isModalOpen && (
        <Modal>
          <Form />
        </Modal>
      )}
    </div>
  );
}

export default App;
