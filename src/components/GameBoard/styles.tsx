import styled from "styled-components";
import { SquareContainerProps } from "./interfaces";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const BoardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 31.25rem;
  margin: 1rem 0;
`;
const SquareContainer = styled.div<SquareContainerProps>`
  border: 1px solid;
  height: 3.125rem;
  width: 3.125rem;
  background-color: ${({ selected }) => (selected ? "red" : "#fff")};

  @media screen and (max-width: 37.5em) {
    height: 2.25rem;
    width: 2.25rem;
  }
`;

export { Container, BoardContainer, SquareContainer };
