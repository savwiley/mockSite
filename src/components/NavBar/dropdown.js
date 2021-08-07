import { Link } from "react-router-dom";
import { auth } from "../firebase.js";
import { DropDownStyle } from "./styled.js";
import { RiUser3Line, RiSettings3Fill } from "react-icons/ri";

const DropDown = () => {
  const user = auth.currentUser;
  const displayName = user.displayName;

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        alert("signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DropDownStyle>
      <Link to={`/` + displayName} title="Profile">
        <RiUser3Line /> Profile
      </Link>
      <Link to="/settings" title="Settings">
        <RiSettings3Fill /> Settings
      </Link>
      <Link
        onClick={() => {
          signOut();
        }}
        to="/"
        title="Log Out"
      >
        Log Out
      </Link>
    </DropDownStyle>
  );
};

export default DropDown;
