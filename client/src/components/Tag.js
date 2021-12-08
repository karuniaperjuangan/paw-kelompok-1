import styled, { css } from "styled-components";

export const Tag = styled.button`
  background: transparent;
  border-radius: 6px;
  border: none;
  color: white;
  margin: 0;
  padding: 0.25em 1em;

  ${(props) =>
    props.category === "TE" &&
    css`
      background: var(--color-blue);
  `}

  ${(props) =>
  props.category === "TI" &&
  css`
    background: var(--color-green);
  `}

  ${(props) =>
  props.category === "TB" &&
  css`
    background: var(--color-purple);
  `}
`;
