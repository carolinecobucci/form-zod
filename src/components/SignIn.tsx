//Icons
import { useForm } from "react-hook-form";
import { FaUser, FaSignInAlt, FaEyeSlash } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import { TSignInSchema, signInSchema } from "../types/formtypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: TSignInSchema) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    alert("Success");

    reset();
  };

  return (
    <div className="bg-white rounded-lg shadow-md py-8 px-10">
      <div className="flex flex-col gap-1 justify-center items-center mb-5">
        <FaSignInAlt size={30} className="text-indigo-500" />
        <h1 className="text-lg font-bold">Welcome!</h1>
        <p className="text-sm text-gray-400">Sign in to your account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col gap-1 relative mb-3">
          <label htmlFor="name" className="text-sm text-gray-400">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            className="border-b border-gray-400 px-1 py-1 text-black text-sm"
          />
          <FaUser className="absolute right-2 bottom-2 text-gray-400" />
        </div>
        {errors.name && <p className="text-red-500 text-sm mb-1">{`${errors.name.message}`}</p>}

        <div className="flex flex-col gap-1 relative mb-3">
          <label htmlFor="password" className="text-sm text-gray-400">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            className="border-b border-gray-400 px-1 py-1 text-black text-sm"
          />
          <FaEyeSlash className="absolute right-2 bottom-2 text-gray-400" />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mb-1">{`${errors.password.message}`}</p>
        )}
        <div className="flex gap-1 w-64 justify-between">
          <div className=" flex gap-1">
            <input {...register("checkbox")} type="checkbox" name="checkbox" />
            <label htmlFor="checkbox" className="text-sm text-gray-400">
              remenber me?
            </label>
          </div>
          <a href="#" className="text-sm text-indigo-500">
            forgot password?
          </a>
        </div>
        <div className="flex justify-between items-center mb-4 mt-8">
          <button
            disabled={isSubmitting}
            type="submit"
            className="flex gap-1 justify-center items-center text-white py-2 px-6 bg-indigo-500 rounded-md text-sm  disabled:bg-gray-500"
          >
            Login <FaArrowRight />
          </button>
          <Link to="/" className="text-indigo-500 text-sm font-semibold">
            Create account!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
