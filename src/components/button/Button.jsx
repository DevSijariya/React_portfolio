import styles from "./button.module.css";
import React, { useState , useEffect} from "react";
const Button = (props) => {
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
    <div className={`${styles.container} ${isMobile ? styles.mobile : ""}`} onClick={props.onClick} >
        <h1>{props.text}</h1>
        
    </div>
  )
}

export default Button