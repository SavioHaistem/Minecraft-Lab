import StyledUserForm from "../css/StyledUserForm";

function UserForm() {
  return ( 
  <>
    <StyledUserForm>
        <input type="email" name="email"/>
        <input type="text" name="password"/>
        <button> Login </button>
    </StyledUserForm>
  </>
);
}

export default UserForm;