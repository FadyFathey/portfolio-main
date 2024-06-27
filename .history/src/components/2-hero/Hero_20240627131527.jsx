import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        {/* <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div> */}

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software Engineer Front-End 
        </motion.h1>

        <p className="sub-title">
        Detail-oriented and results-driven Front-End Developer with proven expertise in developing high-performance, responsive web applications. Proficient in HTML, CSS, JavaScript, and ReactJS, 
        with a strong foundation in modern web development practices. Experienced in collaborating with cross-functional teams to deliver seamless integration and optimized user experiences. 
        Adept at problem-solving and committed to staying current with industry trends and technologies.
        </p>

        <div className="all-icons flex">
        <a href="https://github.com/FadyFathey">
        <div className="icon icon-github"></div></a>
        <a href="https://www.linkedin.com/in/fady-fathey-maher-72918916b/"> <div className="icon icon-linkedin"></div></a>
        <input type="file" download="FadyFatheyResume.pdf" />
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
