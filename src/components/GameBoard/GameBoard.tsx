import { useState } from "react";
import { Container, BoardContainer, SquareContainer } from "./styles";

const GameBoard = () => {
  const boardsArray = Array(100)
    .fill("")
    .map((_, index) => ({
      id: index + 1,
      selected: false,
    }));

  const [squareList, setSquareList] = useState(boardsArray);

  const handleSelectSquares = (e: any) => {
    setSquareList(
      squareList.map((square) => {
        return square.id === parseInt(e.target.getAttribute("data-id"))
          ? { ...square, selected: !square.selected }
          : square;
      })
    );
  };

  return (
    <Container>
      <BoardContainer>
        {squareList.map((square) => (
          <SquareContainer
            key={square.id}
            data-id={square.id}
            onMouseOver={handleSelectSquares}
            selected={square.selected}
          />
        ))}
      </BoardContainer>
    </Container>
  );
};

export default GameBoard;
