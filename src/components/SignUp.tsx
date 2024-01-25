import { useState } from "react";
//Icons
import { FaUserCircle, FaUser } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white rounded-lg shadow-md py-8 px-10">
      <div className="flex flex-col gap-1 justify-center items-center mb-5">
        <FaUserCircle size={30} className="text-indigo-500" />
        <h1 className="text-lg font-bold">Create account!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 relative mb-3">
          <label htmlFor="username" className="text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b border-gray-400 px-1 py-1 text-black text-sm"
          />
          <FaUser className="absolute right-2 bottom-2 text-gray-400" />
        </div>

        <div className="flex flex-col gap-1 relative mb-3">
          <label htmlFor="email" className="text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-gray-400 px-1 py-1 text-black text-sm"
          />
          <IoMdMail className="absolute right-2 bottom-2 text-gray-400" />
        </div>

        <div className="flex flex-col gap-1 relative mb-3">
          <label htmlFor="password" className="text-sm text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b border-gray-400 px-1 py-1 text-black text-sm"
          />
          <FaLock className="absolute right-2 bottom-2 text-gray-400" />
        </div>

        <button className="flex gap-1 justify-center items-center text-white py-2 px-6 bg-indigo-500 rounded-md text-sm mb-4 mt-8">
          Create <FaArrowRight />
        </button>
        <div className="border-b border-gray-300 mb-3"></div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-sm text-gray-400 font-semibold">
            Or create accout using social media!
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
