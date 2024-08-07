import React from "react";
import Container from "./Container";
import Button from "./Button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home" className="flex items-center pb-28 min-h-screen">
      <Container>
        <div className="mt-28 ">
          <motion.p
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.2 }}
            className="xl:text-lg md:text-base text-sm text-primary tracking-widest"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.3 }}
            className="text-LightestSlate xl:text-6xl md:text-5xl text-3xl font-bold lg:mb-4 mb-2 xl:mt-6 mt-3"
          >
            Mengwa Ugochukwu.
          </motion.h1>
          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.4 }}
            className="xl:text-6xl md:text-5xl text-3xl font-bold text-Slate"
          >
            I build things for the web.
          </motion.h1>
          <motion.p
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.5 }}
            className="text-Slate md:mt-9 mt-6 md:mb-12 mb-8 md:text-[17px] text-[15px] md:leading-7 leading-6 max-w-2xl w-full pr-7"
          >
            As an experienced Frontend Software Engineer, I have a strong record in creating and implementing interactive and user-centric applications. I{"'"}m passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.
          </motion.p>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <motion.div
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.6 }}
            >
              <Button text="Contact Me" link="/" />
            </motion.div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Home;
