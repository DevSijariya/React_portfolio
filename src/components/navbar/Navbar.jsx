import { BiMenuAltRight } from "react-icons/bi";
import styles from "./navbar.module.css"
import React, { useState , useEffect} from "react";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1000); // Set breakpoint for mobile view
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Call to set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`${styles.nav} ${isMobile ? styles.mobile : ""}`}>
        <div className={styles.logo}>
            <img src="./images/logo.png"/>
        </div>
        <div className={styles.content}>
           
                <li>Home</li>
                <li>About Us</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact Me</li>
            
        </div>
                <div className={styles.menu}>
                <BiMenuAltRight/>
                </div>
    </div>
  )
}

export default Navbar
