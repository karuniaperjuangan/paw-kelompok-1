import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <NavbarContainer>
      <div className='navbar-container'>
        <div className='navbar-left'>
          <Link to='/' className='navbar-logo font-caveat' onClick={closeMobileMenu}>
            Kapecal
          </Link>
        </div>
        <div className='navbar-right'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Beranda
              </Link>
            </li>
            <li className='nav-item'>
              <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
              >
                Kontak Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  
  position: sticky;
  background: white;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 999;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 2rem;

  .navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    max-width: 1500px;
  }

  .navbar-left {
    margin-right: 270px;
  }

  .navbar-right {
    margin-left: 70px;
  }

  .navbar-logo {
    color: #101010;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .nav-item {
    height: 80px;
    margin-left: 20px;
  }

  .nav-links {
    color: #101010;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
  }

  .nav-links:hover {
    font-size: 1.05rem;
    text-decoration: underline;
    transition: all 0.3s ease-in-out
  }

  .fa-bars {
    color: #101010;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 95vh;
      position: absolute;
      top: 55px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease-out;
    }

    .nav-menu.active {
      background: var(--color-blue);
      left: 0;
      opacity: 1;
      transition: all 0.5s ease-out;
      z-index: 1;
    }

    .nav-links {
      color: #fff;
      text-align: center;
      margin-top: -225px;
      width: 100%;
      display: table;
      font-size: 24px;
    }

    .nav-links:hover {
      background-color: #fff;
      color: #242424;
      border-radius: 100px;
      font-size: 30px;
      text-decoration: none;
      height: 20px;
      transition: background 1.5s ease;
    }

    .navbar-logo {
      position: absolute;
      bottom: 30px;
      left: 0;
      transform: translate(25%, 50%);
    }

    .menu-icon {
      display: block;
      position: absolute;
      bottom: 30px;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }

    .fa-times {
      color: #101010;
      font-size: 2rem;
    }

    .nav-links-mobile {
      display: block;
      text-align: center;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      text-decoration: none;
      font-size: 1.5rem;
      background-color: transparent;
      color: #fff;
      padding: 14px 20px;
      border: 1px solid #fff;
      transition: all 0.3s ease-out;
    }

    .nav-links-mobile:hover {
      background: #fff;
      color: #242424;
      transition: 250ms;
    }
  }
`;
