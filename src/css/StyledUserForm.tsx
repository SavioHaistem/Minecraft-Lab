import styled from "styled-components";

const StyledUserForm: any = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  margin: 40vh 20vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: fit-content;

  * {
    transition: 0.3s;
  }
  input {
    color: #414141ce;
    background-color: #d2d2d2a6;
    backdrop-filter: blur( 10px );
    border: none;
    border-radius: 0.4rem;
    padding: 0px 0.5rem;
    height: 2.5rem;
    width: 14rem;
  }
  input:focus {
    outline: none;
    box-shadow: 2px 2px 5px #ffffff;
  }
  input:hover {
    box-shadow: 2px 2px 5px #ffffff;
  }
  button {
    background-color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 2px 2px 5px #ffffff;
  }
`
export default StyledUserForm;