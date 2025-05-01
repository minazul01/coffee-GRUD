// react icons
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { authenticaiion } from "./Authentication";


const Register = () => {
    
    const {registerWithEmail, googleLogin } = useContext(authenticaiion);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        // eslint-disable-next-line no-unused-vars
        const userName = form.userName.value;
        const email = form.email.value;
        const passworde = form.passworde.value;
        const ConPassword = form.ConPassword.value;
        // const formObject =
        

        // registerWithEmail(email, passworde)
        registerWithEmail(email, passworde)
        
    }
  return (
    <div>
      <h1 className="text-4xl font-bold my-10">Register user!</h1>
      <div className="p-8 mb-4 gap-5">
        <form onSubmit={handleSubmit} className="w-full items-center justify-items-center space-x-5">
          {/* username input with icon */}
          <div className="w-full md:w-[80%] relative my-7">
            <RiAccountCircleLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
            <input
              type="text"
              name="userName"
              id="text"
              placeholder="Username"
              className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
            />
          </div>

          {/* Email input with icon */}
          <div className="w-full md:w-[80%] relative">
            <MdOutlineMail className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
            />
          </div>

          {/* Password input with icon */}
          <div className="w-full md:w-[80%] relative my-7">
            <RiLockPasswordLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
            <input
              type="password"
              name="passworde"
              id="password"
              placeholder="Password"
              className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
            />
          </div>
          {/* Password input with icon */}
          <div className="w-full md:w-[80%] relative">
            <RiLockPasswordLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
            <input
              type="password"
              name="ConPassword"
              id="password"
              placeholder="Confirm Password"
              className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
            />
          </div>
          <input
            className="my-5 py-2 px-4 bg-lime-300 rounded-md cursor-pointer"
            type="submit"
            value="Register"
          />
        </form>
        <div className="lg:w-[300px] mx-auto p-3 rounded-md bg-gray-200 cursor-pointer text-2xl font-medium flex items-center justify-between">
          <span>
            {" "}
            <FcGoogle />
          </span>
          <button onClick={googleLogin} className="cursor-pointer">Login with google</button>
        </div>
        <div className="lg:w-[300px] mx-auto p-3 rounded-md bg-gray-200 my-5 cursor-pointer text-2xl font-medium flex items-center justify-between">
          <span>
            {" "}
            <FaGithub />
          </span>
          <button className="cursor-pointer">Login with github</button>
        </div>
      </div>
     
    </div>
  );
};

export default Register;
