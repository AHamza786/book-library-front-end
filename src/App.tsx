import React, { useState } from "react";
import { Header, BookList, Form, Modal } from "./components";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="flex flex-col max-w-7xl mx-auto sm:p-10 py-10 px-5 h-screen">
      <Header onClick={() => setShowModal(!showModal)} />
      <BookList onClick={() => setShowModal(!showModal)}/>
      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)}>
          <Form onClick={() => setShowModal(!showModal)} />
        </Modal>
      )}
      {/*  */}
    </div>
  );
}

export default App;
