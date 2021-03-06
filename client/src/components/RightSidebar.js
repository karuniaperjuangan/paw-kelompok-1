import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { deleteAgenda } from "../actions/agendas.js";

export default function RightSidebar({ details, setDetails, openEditModal }) {
  const dispatch = useDispatch();

  const clear = () => {
    setDetails({
      _id: "",
      title: "",
      body: "",
      mahasiswa: [],
      dosbing: [],
      place: "",
      media: "",
      dateKP: "",
      category: "",
    });
  };

  return (
    <SidebarContainer>
      <p>Detail Seminar KP</p>
      <div className="title">
        <h2>{details.title}</h2>
      </div>

      <div className="mahasiswa">
        <p className="heading text-bold">Oleh:</p>
        <ul className="list-mahasiswa">
          {details.mahasiswa.map((mahasiswa, index) => {
            return <li key={index}>{mahasiswa}</li>;
          })}
        </ul>
      </div>

      <div className="deskripsi-seminar">
        <p>{details.body}</p>
      </div>

      <div className="dosbing">
        <p className="heading text-bold">Dosen Pembimbing:</p>
        <ul className="list-dosbing">
          {details.dosbing.map((dosbing, index) => {
            return <li key={index}>{dosbing}</li>;
          })}
        </ul>
      </div>

      <div className="place">
        <p className="heading text-bold">Tempat KP:</p>
        <p>{details.place}</p>
      </div>

      <div className="media">
        <p className="heading text-bold">Media:</p>
        <a href={details.media} target="_blank" rel="noopener noreferrer">
          {details.media}
        </a>
      </div>

      <div className="waktu-tempat">
        <p className="heading text-bold">Waktu:</p>
        <p>{details.dateKP}</p>
      </div>

      <div className="button-container">
        {details.title.length > 0 ? (
          <>
            <Button backgroundColor="var(--color-green)" onClick={openEditModal}>Edit</Button>
            <Button
              backgroundColor="var(--color-red)"
              onClick={() => dispatch(deleteAgenda(details._id))}>
              Delete
            </Button>
            <Button backgroundColor="var(--color-red)" onClick={clear}>
              Clear Selection
            </Button>
          </>
        ) : (
          <Button>Ketuk kartu agenda untuk melihat detail</Button>
        )}
      </div>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  display: block;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color-white);
  overflow-y: scroll;

  padding: 2rem;

  ul {
    list-style-type: none;
  }

  div {
    margin-top: 1rem;
  }

  p,
  li,
  a {
    font-size: 1.1rem;
    line-height: 130%;
  }

  p.heading {
    font-size: 1.25rem;
  }

  .mahasiswa {
    margin: 0;
  }

  .deskripsi-seminar {
    text-align: justify;
  }
`;
