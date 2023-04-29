import styled from "styled-components";

const StyledFigures: any = styled.div`
img {
  position: absolute;
  z-index: -1;
}
`
const StyledIsle: any = styled.div`
  img {
      margin: 2vh 4vw;
      max-width: 35vw;
  }
`
const StyledPlayers: any = styled.div`
  img {
    right: 0;
    margin: 3vh 5vw 0vh 0vw;
    max-width: 25vw;
  }
`

export { StyledIsle, StyledFigures, StyledPlayers }