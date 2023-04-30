import HomeFigures from "../../components/HomeFigures";
import UserForm from "../../components/UserForm";
import StyledHome from "../../css/StyledHome";

function Home() {
  return (
  <>
  <HomeFigures/>
    <StyledHome>
        <h1> MINECRAFT LAB </h1>
        <UserForm/>
    </StyledHome>
  </>
  );
}

export default Home;