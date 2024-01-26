//Icons
import { FaUserCircle, FaUser } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSignUpSchema, signUpSchema } from "../types/formtypes";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
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
        <FaUserCircle size={30} className="text-indigo-500" />
        <h1 className="text-lg font-bold">Create account!</h1>
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
          <label htmlFor="email" className="text-sm text-gray-400">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            className="border-b border-gray-400 px-1 py-1 text-black text-sm"
          />
          <IoMdMail className="absolute right-2 bottom-2 text-gray-400" />
        </div>
        {errors.email && <p className="text-red-500 text-sm mb-1">{`${errors.email.message}`}</p>}

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
          <FaLock className="absolute right-2 bottom-2 text-gray-400" />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mb-1">{`${errors.password.message}`}</p>
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          className="flex gap-1 justify-center items-center text-white py-2 px-6 bg-indigo-500 rounded-md text-sm mb-4 mt-8 disabled:bg-gray-500"
        >
          Create <FaArrowRight />
        </button>
        <div className="border-b border-gray-300 mb-3"></div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className=" flex gap-1 text-sm text-gray-400 font-semibold">
            <Link to="/signin" className="text-indigo-500">
              Sign in here
            </Link>
            or create accout using social media!
          </p>
          <div className="flex gap-3 justify-center">
            <FcGoogle size={20} />
            <RiFacebookCircleFill size={20} className="text-blue-600" />
            <FaPinterest size={19} className="text-red-700" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
