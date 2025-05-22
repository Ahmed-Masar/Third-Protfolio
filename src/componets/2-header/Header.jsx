import "./header.css";
import { Instagram, Linkedin, Github } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const Header = () => {
  return (
    <header className="section__container header__container  " id="home">
      <div className="header__content">
        <motion.h1
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5 }}
        >
          <span>Let's</span> Build Something Great
        </motion.h1>
        <motion.p
          className="section__description"
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          I'm Ahmed, a frontend developer based in Baghdad. I specialize in
          creating modern, interactive websites using React and Next.js —
          turning ideas into seamless, high-quality digital experiences.
        </motion.p>

        <motion.div
          className="all-icons flex"
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {/* <div className="icon-twitter"></div> */}
          <a
            className="icon"
            href="https://www.instagram.com/4pz3/"
            target="_blank"
          >
            <Instagram />
          </a>
          <a
            className="icon"
            href="https://github.com/Ahmed-Masar"
            target="_blank"
          >
            <Github />
          </a>
          <a
            className="icon icon-linkedin-square"
            href="https://www.linkedin.com/in/ahmed-masar-882502351/"
            target="_blank"
          >
            <Linkedin />
          </a>
        </motion.div>
      </div>

      <div className="header__image">
        <motion.img
          src="./assets/me1.jpg"
          alt="header"
          initial={{ opacity: 0, transform: "translateX(40px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </div>
    </header>
  );
};

export default Header;
