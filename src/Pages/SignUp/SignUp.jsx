import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/icons/google.png";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons
import { AuthContext } from "../../context/UserContext";
import toast from "react-hot-toast";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const { createUserByEmail, updateUser } = useContext(AuthContext);

  const createUser = (data) => {
    createUserByEmail(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // save to database and update
        updateUser(data.name)
          .then(() => {
            const userObject = {
              name: data.name,
              email: data.email,
            };
            savedUser(userObject);
          })
          .catch((err) => {
            console.log(err);
          });

        toast.success("Successfully Create an Account");
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const savedUser = (userInfo) => {
    fetch("api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
      })
    );
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="shadow-lg w-96 p-7 rounded-3xl">
        <form onSubmit={handleSubmit(createUser)} className="fieldset">
          <label className="label">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="input"
            placeholder="Name Here"
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}

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
                minLength: {
                  value: 6,
                  message: "Password Should be six characters",
                },
                pattern: {
                  value: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])(?=.*?[0-9])/,
                  message:
                    "Password Should be One Uppercase, Special characters and one number",
                },
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
              to="/sign-in"
              className="link link-hover text-primary text-center"
            >
              Already Have an account? Please Login
            </Link>
          </div>

          <input
            type="submit"
            value="Sign Up Here"
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

export default SignUp;
