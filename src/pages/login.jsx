import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  async function handleLogin(){
    console.log("Email:", email);
    console.log("Password:", password);
    try{
    const response = axios.post("http://localhost:5000/api/user/login",{
      email:email,
      password:password 
    }
  )
}catch(err){
  console.log(err);
}
  }

  

  return (
    <div className="flex items-center bg-[url('/login.jpg')] justify-center min-h-screen bg-gray-100 ">
      <div className="w-[50%] max-w-md bg-white rounded-lg shadow-lg p-8 rounded-[20px] shadow-x"> 
        
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 ">
          Login
        </h1>
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
            onChange={(e)=>setEmail(e.target.value) }
            value={email}
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input 
            onChange={e=>setPassword(e.target.value)} 
            value={password}
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button onClick={handleLogin }
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

