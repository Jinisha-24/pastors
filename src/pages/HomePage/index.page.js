import React from "react";
import ModalComponent from "../../component/Modal";
import ModalPage from "../ModalPage";

function HomePage() {
  return (
    <>
      <div className="App-header">
        <button
          data-toggle="modal"
          data-target="#ModalA"
          className="btn btn-a m-1"
        >
          Button A
        </button>
        <button
          data-toggle="modal"
          data-target="#ModalB"
          className="btn btn-b m-1"
        >
          Button B
        </button>
      </div>
      <ModalComponent modalClass="ModalA">
        <ModalPage buttons={"#ModalB"} />
      </ModalComponent>
      <ModalComponent modalClass="ModalB">
        <ModalPage />
      </ModalComponent>
    </>
  );
}

export default HomePage;
