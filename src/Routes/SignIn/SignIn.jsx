import {createUserDocumentFromAuth, signInWithGooglePopup} from "./../../Utils/Firebase/Firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return(
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  )
};

export default SignIn;