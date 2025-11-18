import {BrowserRouter, Route, Routes, Link} from "react-router";
//import { useRef } from "react";
import SignIn from "./pages/sign in";
import CreateAccount from "./pages/create account";
import KWL from "./pages/kwl";
function App() {
   return (
      <BrowserRouter>
          
         <Routes>
            <Route path="/" element={<KWL/>}/>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/createAccount" element={<CreateAccount/>}/>
         </Routes>
      </BrowserRouter>
   );
}

export default App
