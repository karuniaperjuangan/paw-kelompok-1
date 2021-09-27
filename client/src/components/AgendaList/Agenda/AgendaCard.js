import React from "react";
import styled from "styled-components";
import { Tag } from "../../Tag";

export default function AgendaCard(props) {
  return (
    <AgendaCardContainer>
      <div className="card-title">
        <h3>{props.title}</h3>
      </div>
      <div className="details">
        <div className="tag">
          <Tag prodi={props.prodi}>{props.prodi}</Tag>
        </div>
        <div className="dateKP">{props.dateKP}</div>
      </div>
    </AgendaCardContainer>
  );
}

const AgendaCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  height: auto;
  background: #ffffff;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-right: 1rem;
  cursor: pointer;

  .details {
    margin-top: 1.5rem;
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
  }
`;
