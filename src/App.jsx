import { Header } from "./frontend/components/Header/Header";
import { NavBar } from "./frontend/components/NavBar/NavBar";
import { Home } from "./frontend/pages/home/Home";
import { Login } from "./frontend/pages/login/Login";
import { Profile } from "./frontend/pages/profile/Profile";
import {Route, Routes} from "react-router-dom"
import MockAPI from "./frontend/components/Mockman/Mock";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSelector } from "react-redux";
import RequireAuth from "./frontend/features/auth/RequireAuth";

function App() {
  const {token} = useSelector(state => state.auth);

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000}/>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<RequireAuth token={token}><Home/></RequireAuth>}/>
        <Route path="/profile" element={<RequireAuth token={token}><Profile/></RequireAuth>}/>
        <Route path="/mock-api" element={<MockAPI/>}/>
     </Routes>
     <NavBar/>
    </>
  );
}

export default App;
