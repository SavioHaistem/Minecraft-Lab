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
      max-width: 30vw;
  }
`
const StyledPlayers: any = styled.div`
  img {
    right: 0;
    margin: 3vh 5vw;
    max-width: 30vw;
  }
  @media screen and (max-width: 1043px) {
    img {
      bottom: 0;
      max-width: 40vw;
    }
  }
`

export { StyledIsle, StyledFigures, StyledPlayers }