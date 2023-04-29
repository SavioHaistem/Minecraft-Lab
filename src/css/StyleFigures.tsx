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
      width: 25rem;
      height: 35rem;
  }
`
const StyledPlayers: any = styled.div`
  img {
    right: 0;
    max-width: 25vw;
  }
`

export { StyledIsle, StyledFigures, StyledPlayers }