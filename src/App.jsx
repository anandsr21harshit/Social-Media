import { Header } from "./frontend/components/Header/Header";
import { NavBar } from "./frontend/components/NavBar/NavBar";
import { Home } from "./frontend/pages/home/Home";
import { Login } from "./frontend/pages/login/Login";
import { Profile } from "./frontend/pages/profile/Profile";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
     </Routes>
     <NavBar/>
    </>
  );
}

export default App;
