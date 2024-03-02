import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import Main from "../features/home/home";

function Home() {
    return ( 
        <div>
            <NavBar>
                <Main></Main>
            </NavBar>
        </div>
     );
}

export default Home;