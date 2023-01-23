import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Button = styled.button`
  background-color: ${(props) => (props.login ? "green" : "purple")};
  color: aliceblue;
  padding: 8px;
  margin: 1px;
  border-radius: 5px;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
`;

const Nav = styled.nav`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(77, 9, 121, 1) 35%,
    rgba(5, 0, 255, 0.3957868303571429) 100%
  );
  height: 60px;
  border-bottom: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
font-size: 20px;
color: aliceblue;
`

function NavBar({ currentUser, handleUpdateUser }) {

  function handleLogOut() {
    handleUpdateUser(null);
  }

  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Span>
          <h1>🐶 Dog Walkers R Us</h1>
        </Span>
      </Link>

      <div>
        {currentUser ? (
          <Button login onClick={handleLogOut}>
            Logout
          </Button>
        ) : (
          <NavLink to="/login">
            <Button login>Login</Button>
          </NavLink>
        )}
        {currentUser && (
          <NavLink to="/schedule">
            <Button>Schedule A Dog Walk</Button>
          </NavLink>
        )}
        <NavLink to="/about">
          <Button>About</Button>
        </NavLink>
      </div>
    </Nav>
  );
}

export default NavBar;
