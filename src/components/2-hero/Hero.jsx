import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software Engineer Front-End
        </motion.h1>

        <p className="sub-title">
          Detail-oriented and results-driven Front-End Developer with proven
          expertise in developing high-performance, responsive web applications.
          Proficient in HTML, CSS, JavaScript, and ReactJS, with a strong
          foundation in modern web development practices. Experienced in
          collaborating with cross-functional teams to deliver seamless
          integration and optimized user experiences. Adept at problem-solving
          and committed to staying current with industry trends and
          technologies.
        </p>

        <div className="all-icons flex">
          <a
            target="_blank"
            href="https://github.com/FadyFathey"
            rel="noreferrer"
          >
            <div className="icon effect-shine icon-github"></div>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fady-fathey-maher-72918916b/"
            rel="noreferrer"
          >
            <div className="icon effect-shine icon-linkedin"></div>
          </a>
          <a href="/Fady_Fathey_Maher_CV_Front-End.pdf" download>
            <i className="fa-solid fa-file icon effect-shine"></i>
          </a>
        </div>
      </div>

      <div className="right-section animation">
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
