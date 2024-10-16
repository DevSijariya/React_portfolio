import styles from "./home.module.css";
import Button from "../button/Button";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import React, { useState , useEffect} from "react";
import { FaGit, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiMysql, SiOpencv } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Home = () => {

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
    const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };
  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : ""}`}>
      <div className={styles.right}>
      <div className={`${styles.imageContainer} ${flipped ? styles.flip : ""}`}>
        <div className={styles.front}>
          <img src="./images/boy.png" alt="Front Image" className={styles.image} />
        </div>
        <div className={styles.back}>
          <img src="./images/my.jpg" alt="Back Image" className={styles.image2} />
        </div>
      </div>
        <div className={styles.box1}>
        <MdOutlineFlipCameraAndroid  text="Flip Image" onClick={handleFlip} /> 
        </div>
        <div className={styles.box} >
        {/* <MdOutlineFlipCameraAndroid text="Flip Image" onClick={handleFlip} />  */}
        <Button  text=" Download CV "/>
        </div>
      </div>
      <div className={styles.left}>
        <h1>
          Hello Everyone,
          <br />I am Sanskar Sijariya Passionate Software Developer
        </h1>
        <div className={styles.iconsbox}>
        <div className={styles.marquee}>
    <FaPython />
    <SiDjango />
    <FaHtml5 />
    <IoLogoJavascript />
    <FaReact />
    <SiMysql />
    <FaGit />
    {/* Duplicate icons */}
    <FaPython />
    <SiDjango />
    <FaHtml5 />
    <IoLogoJavascript />
    <FaReact />
    <SiMysql />
    <FaGit />
  </div>
        </div>
        <p>
          I’m a B.Tech IT graduate passionate about data science and software
          development, with hands-on experience in machine learning, Django, and
          React.js. I’ve built projects like stock price predictors, portfolio
          builders, and Power BI dashboards. Skilled in Python, SQL, and web
          development
        </p>
      </div>
    </div>
  );
};

export default Home;
