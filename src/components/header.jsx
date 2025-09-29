import { Link } from "react-router-dom"
import Login from "../pages/login"

export default function Header(){
    console.log("header component   ")
    return(
        <div className="w-full h-[50px] bg-red flex justify-center items-center gap-10">
            <Link to="/">Home </Link>

            <Link to="/login">Login </Link>
            <Link to="/signup">SignUp </Link>   
            <Link to="https://www.google.com"> Google  </Link>
        </div>
    )
}