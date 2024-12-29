import Navbar from "../../components/Navbar/Navbar";
import style from "./home.module.css";

const Home = () => {
    return(
        <div className = {style.homeContainer}>
            <Navbar />
            <h1>home</h1>
        </div>
    )
};

export default Home;