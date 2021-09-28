import React, { useCallback } from "react";
import styled from "styled-components";
import AgendaCard from "./Agenda/AgendaCard";
import { useSelector } from "react-redux";

export default function AgendaList({ details, setDetails }) {
  const agendas = useSelector((state) => state.agendas);

  const handleClick = useCallback(
    (item) => {
      setDetails({
        ...details,
        id: item._id,
        title: item.title,
        body: item.body,
        mahasiswaList: item.mahasiswa,
        dosbingList: item.dosbing,
        place: item.place,
        media: item.media,
        dateKP: item.dateKP,
        category: item.category,
      });
    },
    [setDetails]
  );

  let agendaItem = agendas.map((item) => {
    return (
      <div
        data={item}
        key={item._id}
        onClick={() => handleClick(item)}
        className="agenda-item">
        <AgendaCard
          title={item.title}
          category={item.category}
          dateKP={new Date(item.dateKP).toDateString()}
        />
      </div>
    );
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
