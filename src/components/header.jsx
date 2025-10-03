import { Link } from "react-router-dom"
import Login from "../pages/login"
import Register from "../pages/register"

export default function Header(){
    console.log("header component   ")
    return(
        <div className="w-full h-[50px] bg-red flex justify-center items-center gap-10">
            <Link to="/">Home </Link>

            <Link to="/login">Login </Link>
            <Link to="/register">Register </Link>   
            <Link to="https://www.google.com"> Google  </Link>
        </div>
    )
}