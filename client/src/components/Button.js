import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--color-blue)"};
  margin: 0.5em 1em;
  border: 1px solid
    ${(props) => (props.backgroundColor ? props.backgroundColor : "var(--color-blue)")};
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "var(--color-white)")};
  border-radius: 8px;
  cursor: pointer;
`;

export const OutlineButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  margin: 0.5em 1em;
  border: 1px solid
    ${(props) => (props.border ? props.border : "var(--color-blue)")};
  font-weight: bold;
  color: ${(props) => (props.border ? props.border : "var(--color-blue)")};
  border-radius: 8px;
  cursor: pointer;
`;
