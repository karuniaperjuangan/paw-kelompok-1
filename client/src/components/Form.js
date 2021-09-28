import React, { useState, useEffect } from "react";
import Datetime from "react-datetime";
import styled from "styled-components";
import "react-datetime/css/react-datetime.css";
import { useDispatch } from "react-redux";
import { createAgenda } from "../actions/agendas.js";

import { Button, OutlineButton } from "./Button";

export default function Form(props) {
  const [agendaData, setAgendaData] = useState({
    title: "",
    body: "",
    mahasiswa: [],
    dosbing: [],
    place: "",
    media: "",
    dateKP: "",
    category: "",
  });

  const dispatch = useDispatch();

  const formatDate = (string) => {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString(["id"], options);
  };

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      dispatch(createAgenda(agendaData));
      props.setModalIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const clear = () => {
    setAgendaData({
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
    <FormContainer>
      <h3>Add Agenda Seminar</h3>
      <div className="form-section">
        <form autoSubmit="off" className="agenda-form" onSubmit={handleSubmit}>
          <label htmlFor="title" className="text-bold">
            Judul
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Masukkan judul seminar KP-mu disini"
            value={agendaData.title}
            required="required"
            aria-required="true"
            onChange={(e) =>
              setAgendaData({ ...agendaData, title: e.target.value })
            }
          />

          <label htmlFor="body" className="text-bold">
            Deskripsi
          </label>
          <textarea
            type="text"
            name="body"
            id="body"
            value={agendaData.body}
            placeholder="Masukkan deskripsi singkat mengenai seminar KP-mu"
            onChange={(e) =>
              setAgendaData({ ...agendaData, body: e.target.value })
            }
          />

          <label htmlFor="mahasiswa" className="text-bold">
            Mahasiswa
          </label>
          <input
            type="text"
            name="mahasiswa"
            id="mahasiswa"
            value={agendaData.mahasiswa}
            placeholder="Masukkan nama-nama mahasiswa yang melakukan seminar KP. Pisah dengan koma."
            required="required"
            aria-required="true"
            onChange={(e) =>
              setAgendaData({
                ...agendaData,
                mahasiswa: e.target.value.split(","),
              })
            }
          />

          <label htmlFor="dosbing" className="text-bold">
            Dosen Pembimbing
          </label>
          <input
            type="text"
            name="dosbing"
            id="dosbing"
            value={agendaData.dosbing}
            placeholder="Masukkan dosen pembimbing seminar KP. Pisah dengan koma."
            onChange={(e) =>
              setAgendaData({
                ...agendaData,
                dosbing: e.target.value.split(","),
              })
            }
          />

          <label htmlFor="place" className="text-bold">
            Tempat KP
          </label>
          <input
            type="text"
            name="place"
            id="place"
            value={agendaData.place}
            placeholder="Masukkan tempatmu melaksanakan KP"
            onChange={(e) =>
              setAgendaData({ ...agendaData, place: e.target.value })
            }
          />

          <label htmlFor="media" className="text-bold">
            Media
          </label>
          <input
            type="text"
            name="media"
            id="media"
            value={agendaData.media}
            placeholder="Masukkan media pelaksanaan KP (link/offline)"
            required="required"
            aria-required="true"
            onChange={(e) =>
              setAgendaData({ ...agendaData, media: e.target.value })
            }
          />

          <label htmlFor="category" className="text-bold">
            Prodi
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={agendaData.category}
            placeholder="Masukkan program studi kamu (TE/TI/TB)"
            required="required"
            aria-required="true"
            onChange={(e) =>
              setAgendaData({ ...agendaData, category: e.target.value })
            }
          />

          <label htmlFor="date" className="text-bold">
            Waktu
          </label>
          <Datetime
            dateFormat="DD-MMM-YYYY"
            initialValue={new Date()}
            value={new Date(agendaData.dateKP)}
            onChange={(e) => setAgendaData({ ...agendaData, dateKP: e._d })}
          />
          <div className="button-container">
            <OutlineButton onClick={props.closeModal}>Cancel</OutlineButton>
            <Button type="button" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: var(--color-white);
  border-radius: 1rem;
  padding: 1rem;
  color: var(--color-black);

  h3 {
    text-align: center;
  }

  .form-section {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  form {
    width: 100%;

    input {
      height: 30px;
      width: 100%;
      margin-bottom: 1rem;
      padding: 0.5rem;
    }

    label {
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    textarea {
      height: 80px;
      display: block;
      resize: none;
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }

    .button-container {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
    }
  }
`;
