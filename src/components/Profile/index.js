//import { useParams } from "react-router-dom";
import NavBar from "../NavBar";

const Profile = () => {
  //const displayName = useParams();

  return(
    <>
    <NavBar />
    </>
  )
};

export default Profile;

//https://firebase.google.com/docs/auth/admin/manage-users

/**
 * Can't retrieve data of other users. Solution:
 * 
 * The PROFILE is only for the signed-in user and displays their posts.
 * 
 * Each post will hold the user's displayName & image as metadata. Comments & likes will somehow be included. 
 */