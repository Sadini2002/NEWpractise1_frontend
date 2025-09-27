import { Link } from "react-router-dom"

export default function Header(){
    console.log("header component   ")
    return(
        <div className="w-full h-[60px] bg-blue flex justify-center items-center">
            <Link to="/">Home </Link>

            <Link to="/login">Login </Link>
            <Link to="/signup">SignUp </Link>   
            <Link to="https://www.google.com"> Google  </Link>
        </div>
    )
}