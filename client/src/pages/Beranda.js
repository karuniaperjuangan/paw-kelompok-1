import React, { useState } from "react";
import styled from "styled-components";
import RightSidebar from "../components/RightSidebar";
import AgendaList from "../components/AgendaList/AgendaList";
import AddButton from "../components/AddButton";
import Modal from "react-modal";

export default function Beranda() {
  const [details, setDetails] = useState({
    title: "Pemanfaatan Air sebagai Energi Terbarukan di Desa Sukaair",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    mahasiswaList: ["Mahasiswa 1", "Mahasiswa 2"],
    dosbingList: ["Dosbing 1", "Dosbing 2"],
    place: "Tempat/Perusahaan KP",
    media: "Link Meeting Seminar KP",
    dateKP: "13:00, 2 Desember 2021",
    tag: "TI",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setModalIsOpen(false);
  };

  return (
    <BerandaContainer id="container-beranda" className="container-beranda">
      <div className="agenda">
        <div className="month">{/* TODO: Add month selector */}</div>
        <div className="agenda-list">
          <AgendaList />
        </div>
        <div className="add-new-agenda">
          <AddButton onClick={openModal} />
          <Modal
            appElement={document.getElementById("add-button")}
            parentSelector={() => document.querySelector("#container-beranda")}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="blockModal"
            overlayClassName="blockModalOverlay">
            <div className="content-modal"></div>
          </Modal>
        </div>
      </div>
      <div className="sidebar">
        <RightSidebar details={details} />
      </div>
    </BerandaContainer>
  );
}

const BerandaContainer = styled.div`
  position: relative;
  height: calc(100vh - 3rem);
  width: 100%;
  background-color: var(--color-grey);
  overflow: hidden;

  display: flex;
  flex-direction: row;

  .month {
    height: 5%;
  }

  .agenda {
    display: flex;
    flex-direction: column;
    width: 70%;
    min-height: 100%;
    padding: 2rem;
  }

  .sidebar {
    width: 30%;
    min-height: 100%;
  }

  .blockModal {
    position: fixed;
    top: 50vh;
    left: 50vw;
    right: auto;
    bottom: auto;
    margin-left: -40vw;
    margin-top: -35vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    outline: none;
    width: 80%;
    height: 70%;
    position: relative;
    border-radius: 2rem;
  }

  .blockModalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .content-modal {
    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    transition: opacity 200ms ease-in-out;
    background-color: var(--color-white);
  }
`;
