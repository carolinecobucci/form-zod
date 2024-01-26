import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
