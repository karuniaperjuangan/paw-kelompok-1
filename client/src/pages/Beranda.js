import React, {useState} from "react";
import styled from "styled-components";
import LeftSidebar from "../components/LeftSidebar";

export default function Beranda() {
  const [details, setDetails] = useState({
    title: "Pemanfaatan Air sebagai Energi Terbarukan di Desa Sukaair",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    mahasiswaList: ["Mahasiswa 1", "Mahasiswa 2"],
    dosbingList: ["Dosbing 1", "Dosbing 2"],
    place: "Tempat/Perusahaan KP",
    media: "Link Meeting Seminar KP",
    dateKP: "13:00, 2 Desember 2021",
  });

  return (
    <BerandaContainer className="container-beranda">
      <div className="agenda"></div>
      <div className="sidebar">
        <LeftSidebar details={details}/>
      </div>
    </BerandaContainer>
  );
}

const BerandaContainer = styled.div`
  position: relative;
  height: calc(100vh - 3rem);
  width: 100%;
  background-color: var(--color-grey);
  padding: 0rem 0rem 0rem 5rem;
  overflow: hidden;

  display: flex;
  flex-direction: row;

  .agenda {
    display: flex;
    width: 70%;
    min-height: 100%;
  }

  .sidebar {
    width: 30%;
    min-height: 100%;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .container-beranda::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .container-beranda {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
