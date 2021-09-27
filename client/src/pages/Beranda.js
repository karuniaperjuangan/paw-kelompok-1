import React, { useState } from "react";
import styled from "styled-components";
import RightSidebar from "../components/RightSidebar";
import AgendaList from "../components/AgendaList/AgendaList";

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

  return (
    <BerandaContainer className="container-beranda">
      <div className="agenda">
        <div className="month">{/* TODO: Add month selector */}</div>
        <div className="agenda-list">
          <AgendaList />
        </div>
        <div className="add-new-agenda"></div>
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
`;
