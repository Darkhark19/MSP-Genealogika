
import styles from "./styles.module.scss";
import logo from "../../assets/Genealogika_logo.png";
import Button from "react-bootstrap/button";
import { useNavigate } from "react-router-dom";


export function Home(){
    const navigate = useNavigate();
    

    return(
            <div className={styles.navbar}>
            
            <a href="/" ><img src={logo} alt="Genealogika" /></a>
            <a href="#">Link</a>
            <a href="Help">Link</a>
            <a href="Login" className="right">Login</a>
            </div>
  
        

    );
}