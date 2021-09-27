import React from "react";
import styled from "styled-components";

export default function AgendaList() {
  return <AgendaListContainer>
    
  </AgendaListContainer>;
}

const AgendaListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  max-height: 70%;
  justify-content: space-between;
  overflow: scroll;

  .agenda-item {
    margin-top: 1rem;
    margin-right: 1rem;
    flex-basis: 30%;
  }
`;
