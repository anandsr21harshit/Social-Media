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
import Modal from "./frontend/components/PostCard/Modal/Modal";
import Bookmark from "./frontend/pages/bookmark/Bookmark";
import ScrollToTop from "./frontend/customHooks/ScrollToTop";
import Explore from "./frontend/pages/explore/Explore";
import UserProfile from "./frontend/pages/user-profile/UserProfile";

function App() {
  const {token} = useSelector(state => state.auth);

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000}/>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/explore" element={<RequireAuth token={token}><Explore/></RequireAuth>}/>
        <Route path="/bookmark" element={<RequireAuth token={token}><Bookmark/></RequireAuth>}/>
        <Route path="/" element={<RequireAuth token={token}><Home/></RequireAuth>}/>
        <Route path="/profile" element={<RequireAuth token={token}><Profile/></RequireAuth>}/>
        <Route path="/user-profile/:username" element={<RequireAuth token={token}><UserProfile/></RequireAuth>}/>
        <Route path="/mock-api" element={<MockAPI/>}/>
     </Routes>
     <NavBar/>
     <Modal/>
    </>
  );
}

export default App;
