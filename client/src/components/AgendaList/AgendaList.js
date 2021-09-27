import React from "react";
import styled from "styled-components";
import AgendaCard from "./Agenda/AgendaCard";
import { useSelector } from "react-redux";

export default function AgendaList() {
  const agendas = useSelector((state) => state.agendas);
  console.log(agendas);

  let agendaItem = agendas.map((item) => {
    return(
    <div key={item._id} className="agenda-item">
      <AgendaCard title={item.title} prodi={item.category} dateKP={new Date(item.dateKP).toDateString()}/>
    </div>);
  });
  return <AgendaListContainer>{agendaItem}</AgendaListContainer>;
}

const AgendaListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  max-height: 100%;
  justify-content: space-between;
  overflow: scroll;

  .agenda-item {
    margin-top: 1rem;
    margin-right: 1rem;
    flex-basis: 30%;
  }
`;
