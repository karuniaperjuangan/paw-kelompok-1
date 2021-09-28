import React, { useState } from "react";
import styled from "styled-components";

export default function AddButton(props) {
  return (
    <AddButtonContainer id="add-button" onClick={props.onClick}>
      <div className="icon">
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5 11H1.5M12.5 0V11V0ZM12.5 11V22V11ZM12.5 11H23.5H12.5Z"
            stroke="#C2C2C2"
            stroke-width="2.76289"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <h4>Klik disini untuk menambahkan agenda seminar KP</h4>
    </AddButtonContainer>
  );
}

const AddButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  max-height: 400px;
  border: 3px solid var(--color-muted);
  padding: 1rem;
  text-align: center;
  color: var(--color-muted);
  cursor: pointer;
  justify-content: center;
  align-items: center;  
`;
