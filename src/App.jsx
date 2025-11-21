import {BrowserRouter, Route, Routes} from "react-router"; 
import SignIn from "./pages/sign in";
import CreateAccount from "./pages/create account";
import KWL from "./pages/kwl";
import SharedFiles from "./pages/shared files";
function App() {
   return (
      <BrowserRouter>
          
         <Routes>
            <Route path="/" element={<KWL/>}/>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/createAccount" element={<CreateAccount/>}/>
            <Route path="/sharedFiles" element={<SharedFiles/>}/>
         </Routes>
      </BrowserRouter>
   );
}

export default App
