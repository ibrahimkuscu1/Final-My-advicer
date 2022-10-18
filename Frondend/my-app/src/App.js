import AdviserSignIn from "./components/adviserLogin";
import SignIn from "./components/login";
import Register from "./components/register";
import SignUp from "./components/signup";
import Search from "./components/search";


function App() {
  return (
    <div>
     <SignUp/> 
     <SignIn/> 
     <Register/> 
     <AdviserSignIn/>
     <Search/>
    </div>
  );
}

export default App;
