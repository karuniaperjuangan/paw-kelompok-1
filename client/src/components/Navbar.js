import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarContainer>
      <div className="logo">
        <Link className="font-caveat">Kapecal</Link>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link>Beranda</Link>
          </li>
          <li>
            <Link>Agenda Tersimpan</Link>
          </li>
        </ul>
      </div>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  min-height: 3rem;
  z-index: 1000;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 2rem;
  background-color: white;

  a {
    color: #101010;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
  }

  div {
    min-width: 50%;
    height: 100%;
  }

  .logo {
    font-weight: bold;
    font-size: 2rem;
  }

  .nav-links {
    display: flex;
    flex-direction: row;

    ul {
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      width: 100%;
      font-size: 1.1rem;

      a:hover {
        font-size: 1.15rem;
        transition: all 0.5s ease-in-out;
        text-decoration: underline;
      }
    }
  }
`;
