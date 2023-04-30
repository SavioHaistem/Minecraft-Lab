import StyledUserForm from "../css/StyledUserForm";

function UserForm() {
  return ( 
  <>
    <StyledUserForm>
        <input type="text" name="email"/>
        <input type="text" name="senha"/>
    </StyledUserForm>
  </>
);
}

export default UserForm;