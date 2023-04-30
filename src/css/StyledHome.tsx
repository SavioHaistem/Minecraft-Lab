import styled from "styled-components";

const StyledHome = styled.div`
  * {
    font-family: Minecraft Ten;
  }
  h1 {
    background: linear-gradient(to top bottom, #c3c3c3, black);
    font-size: 40px;
    text-align: center;
  }
  .miencraftGradient {
    background-image: linear-gradient(to top, #727272, #d2d2d2, #dedede);
  
    background-clip: text;
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
    
    text-shadow: 0 0 5px rgba(0,0,0,0.5);
  }
`

export default StyledHome