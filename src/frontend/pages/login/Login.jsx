import React, { useEffect, useState } from "react";
import LoginCSS from "./Login.module.css";
import landingicon from "../../assets/undraw_add_friends_re_3xte.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  },[token]);

  return (
    <div className={`d-flex ${LoginCSS.wrapper}`}>
      <img src={landingicon} alt="" />
      <section className={`d-flex ${LoginCSS.container}`}>
        <main className={`d-flex ${LoginCSS.main}`}>
          <header className={LoginCSS.brand}>
            <h1>Dev Junction</h1>
          </header>
          <input
            type="text"
            placeholder="username"
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            required
          />
          <button
            className={`btn btn-primary ${LoginCSS.login_btn}`}
            onClick={() => {
              dispatch(
                loginHandler({
                  username: userDetails.username,
                  password: userDetails.password,
                })
              )
            }}
          >
            Log In
          </button>
          <div className="d-flex">
            <div className={LoginCSS.h_line}></div>
            <p>Or</p>
            <div className={LoginCSS.h_line}></div>
          </div>
          <button
            className={`btn btn-primary ${LoginCSS.login_btn}`}
            onClick={() => {
              setUserDetails({ username: "hanand2021", password: "igity@211" });
              dispatch(
                loginHandler({ username: "hanand2021", password: "igity@211" })
              );
            }}
          >
            Use Test Credential
          </button>
        </main>
        <footer className={`d-flex ${LoginCSS.footer}`}>
          <p>
            Don't have an account? <a href="#signup">Sign Up</a>
          </p>
          <div className={`d-flex ${LoginCSS.chips}`}>
            <span>About</span>
            <span>Blogs</span>
            <span>Help</span>
            <span>API</span>
            <span>HashTags</span>
            <span>Location</span>
            <span>DevTalks</span>
            <span>TedX</span>
            <span>Hackathons</span>
          </div>
        </footer>
      </section>
    </div>
  );
}

export { Login };
