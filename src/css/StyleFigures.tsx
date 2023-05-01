import styled from "styled-components";

const StyledFigures: any = styled.div`
  position: absolute;
  width: 90vw;
  z-index: -1;
  top: 0;
`
const StyledIsle: any = styled.div`
  img {
      margin: 2vh 4vw;
      max-width: 30vw;
  }
`
const StyledPlayers: any = styled.div`
  img {
    margin: 3vh 5vw;
    max-width: 30vw;
  }
  @media screen and (max-width: 1043px) {
    img {
      max-width: 40vw;
    }
  }
`

export { StyledIsle, StyledFigures, StyledPlayers }