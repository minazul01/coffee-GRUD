import React, { useContext } from "react";
import { authenticaiion } from "./Authentication";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginEmailPass, signOuter, user, loginGithub } = useContext(authenticaiion);

  const handLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginEmailPass(email, password);
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full gap-8">
          <div className="lg:w-1/2 space-y-20 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            <div className="card-body">
              <form onSubmit={handLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <Link to="/register"><button className="btn">Register Click</button></Link>
              </form>
              {user ? (
                <button
                  onClick={signOuter}
                  className="p-3 bg-lime-300 rounded-md cursor-pointer"
                >
                  signOut
                </button>
              ) : (
                <div className="lg:w-[300px] mx-auto p-3 rounded-md bg-gray-200 my-5 cursor-pointer text-2xl font-medium flex items-center justify-between">
                  <span>
                    {" "}
                    <FaGithub />
                  </span>
                  <button onClick={loginGithub} className="cursor-pointer">Login with github</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
