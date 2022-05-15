import React from "react";
import LoginCSS from "./Login.module.css";

function Login() {
  return (
    <section className={LoginCSS.container}>
      <main className={LoginCSS.main}>
        <h1>DevJunction</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </main>
    </section>
  );
}

export { Login };
