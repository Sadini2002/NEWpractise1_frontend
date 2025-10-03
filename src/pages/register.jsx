import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // default role

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/user/register",
        {
          email,
          firstname,
          lastname,
          password,
          role,
        }
      );

      toast.success("Registration successful");
      console.log(response.data);

      navigate("/login"); // after register → go to login
    } catch (e) {
      console.error(e);
      toast.error(e.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div className="flex items-center bg-[url('/login.jpg')] justify-center min-h-screen bg-gray-100">
      <div className="w-[50%] max-w-md bg-white rounded-lg shadow-lg p-8 rounded-[20px]">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h1>
        <form onSubmit={handleRegister} className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block text-gray-600 mb-1">First Name</label>
            <input
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-600 mb-1">Last Name</label>
            <input
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Role (optional: default "user") */}
          <div>
            <label className="block text-gray-600 mb-1">Role</label>
            <select
              onChange={(e) => setRole(e.target.value)}
              value={role}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
