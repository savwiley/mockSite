import React, { useRef, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { ModalLoading } from "../Loading";
import { RiImageEditLine } from "react-icons/ri";
import firebase, { auth } from "../firebase";
import { SettingsStyle, SettingsTop, SettingsPic, Form } from "./styled";

const Settings = () => {
  const [userName, setUserName] = useState();
  const [loading, setLoading] = useState(false);
  const [newEmail, setEmail] = useState();
  const [password, setPassword] = useState();
  const nameBoo = useRef(false);
  const photoBoo = useRef(false);

  // user profile variables
  const user = auth.currentUser;
  const { displayName } = user;
  const { email } = user;
  const { photoURL } = user;

  // changes booleans
  if (displayName !== null) {
    nameBoo.current = true;
  };
  if (photoURL !== null) {
    photoBoo.current = true;
  };

  const changeImage = (image) => {
    const imgURL = `/profile/${image.name}`;
    const photoStore = firebase.storage().ref(imgURL);
    photoStore.put(image);

    photoStore.getDownloadURL().then((url) => {
      user
        .updateProfile({
          photoURL: url,
        })
        .then(() => {
          setLoading(false);
          alert("Image uploaded!");
          window.location.reload();
        })
        .catch((err) => {
          setLoading(false);
          alert("Something went wrong!");
          console.log(err);
        });
    });
  };

  const savePassword = () => {
    if (password) {
      user
        .updatePassword(password)
        .then(() => {
          setLoading(false);
          alert(`Password changed!`);
          window.location.reload();
        })
        .catch((err) => {
          setLoading(false);
          alert("Something went wrong!");
          console.log(err);
        })
    } else {
      setLoading(false);
      alert("Please input new password.")
    }
  };

  const saveChanges = () => {
    userName ? null : setUserName(displayName);
    newEmail ? null : setEmail(email);
    
    user
      .updateProfile({
        displayName: userName,
        email: newEmail,
      })
      .then(() => {
        setLoading(false);
        alert(`Settings changed!`);
        window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong!");
        console.log(err);
      })
  };

  const deleteAccount = () => {
    user
      .delete()
      .then(() => {
        setLoading(false);
        alert("Account deleted.");
        window.location.reload();
        //will send to home screen via Route.js
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong!");
        console.log(err);
      });
  };

  return (
    <>
      {loading && <ModalLoading />}
      <NavBar />

      <SettingsStyle>
        <SettingsTop>
          <SettingsPic picture={photoURL}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                changeImage(e.target.files[0]);
              }}
            />
            {photoBoo.current ? <RiImageEditLine className="icon" /> : <RiImageEditLine />}
          </SettingsPic>
          {nameBoo.current ? displayName : email}
        </SettingsTop>

        <Form>
          <div>
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="Save Changes"
              onClick={() => {
                setLoading(true);
                saveChanges();
              }}
            />
          </div>


          <div>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="Change Password"
              onClick={() => {
                setLoading(true);
                savePassword();
              }}
            />
          </div>

          <div>
            <input
              type="button"
              value="Delete Account"
              id="delBtn"
              onClick={() => {
                if (
                  confirm(
                    "Are you sure you want to delete your Notagram account?"
                  )
                ) {
                  setLoading(true);
                  deleteAccount();
                }
              }}
            />
          </div>
        </Form>
      </SettingsStyle>

      <Footer />
    </>
  );
};

export default Settings;

/** TODO
 * - remember to rebuild/rehost
 */
