import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const HomePage = () => {
    const {auth} = useAuth()
    console.log(auth)
    return (
        <div>
            Home page
            <Link to='/me'>PROFILE</Link>
        </div>
    );
};

export default HomePage;