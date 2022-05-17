import React from "react";
import LoginCSS from "./Login.module.css";
import landingicon from "../../assets/undraw_add_friends_re_3xte.svg"

function Login() {
  return (
    <div className={`d-flex ${LoginCSS.wrapper}`}>
    <img src={landingicon} alt="" />
    <section className={`d-flex ${LoginCSS.container}`}>
      <main className={`d-flex ${LoginCSS.main}`}>
        <header className={LoginCSS.brand}>
          <h1>Dev Junction</h1>
        </header>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button className={`btn btn-primary ${LoginCSS.login_btn}`}>
          Log In
        </button>
        <div className="d-flex">
          <div className={LoginCSS.h_line}></div>
          <p>Or</p>
          <div className={LoginCSS.h_line}></div>
        </div>
        <button className={`btn btn-primary ${LoginCSS.login_btn}`}>
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
