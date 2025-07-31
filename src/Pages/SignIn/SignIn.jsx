import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/icons/google.png";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/UserContext";
import { useContext } from "react";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const { signInUser } = useContext(AuthContext);

  const logInUser = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successful");
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="shadow-lg w-96 p-7 rounded-3xl">
        <form onSubmit={handleSubmit(logInUser)} className="fieldset">
          <label className="label mt-3">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="input"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}

          <label className="label mt-3">Password</label>
          <div className="relative w-80">
            <input
              {...register("password", {
                required: "Password is Required",
              })}
              type={showPassword ? "text" : "password"}
              className="input pr-10 w-full"
              placeholder="Password"
            />

            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          <div className="mt-2">
            <Link
              to="/sign-up"
              className="link link-hover text-primary text-center"
            >
              New to Website ? Create An Account
            </Link>
          </div>

          <input
            type="submit"
            value="Sign In Here"
            className="btn btn-primary mt-4"
          />
        </form>

        <button className="btn btn-primary mt-4 w-full">
          Continue With Google <img src={googleIcon} alt="Google Icon" />
        </button>
      </div>
    </div>
  );
};

export default SignIn;
