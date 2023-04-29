import IslandFigure from '../../public/imgs/Island.png';
import PlayersFigure from '../../public/imgs/SteeveAndAlex.png';
import { StyledIsle, StyledFigures, StyledPlayers } from '../css/StyleFigures';

function HomeFigures() {
  return (
  <>
  <StyledFigures>
    <StyledIsle>
      <img src={IslandFigure} alt="Minecraft island" />
    </StyledIsle>
    <StyledPlayers>
      <img src={PlayersFigure} alt="Steeve and Alex" />
    </StyledPlayers>
  </StyledFigures>
  </>
  );
}

export default HomeFigures;