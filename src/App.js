import "./App.css";
import{
  GoogleAuthProvider,
  signInWithPopup,
  } from '@firebase/auth';
  import { auth } from "./firebase"
function App() {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const idTokenResult = (await result.user.getIdTokenResult()).token;
        console.log("AUTHTOKEN==>>", idTokenResult);
        console.log("RESPONSE_EMAIL=>", result);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>login with google</button> 
      </div>
  );
}

export default App;
