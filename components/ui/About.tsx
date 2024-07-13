import React, { useRef, useEffect } from "react";
import Container from "./Container";
import Heading from "./Heading";
import { motion, Variants } from "framer-motion";
import about from "../../public/images/about.png";
import Image from "next/image";
import { Icon } from "@iconify/react";

const About = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const skills = [
    'Reactjs',
    'React',
    'Nextjs',
    'TypeScript',
    'Redux',
    'Tailwind CSS',
    'Framer Motion',
    'Adobe Illustrator',
    'Figma',
    'Nodejs',
    'Adobe Photoshop',
  ]

  return (
    <section
      id="about"
      style={{
        backgroundImage: "url(/images/about.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="about-poster relative py-10 max-w-6xl w-full mx-auto"
    >
      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Heading headingNumber={1} headingText="About Me" />
          </motion.div>
          <div className="">
            <div className="flex flex-col gap-5 my-5 text-Slate md:text-base text-sm leading-normal ">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                Hello! My name is Mengwa Ugochukwu, and I enjoy creating dynamic and
                engaging web applications. My journey into web development began
                with experimenting with HTML and CSS to customize my first
                personal website. The thrill of bringing my ideas to life on the
                internet quickly grew into a passion for coding and building
                impactful digital experiences. <br /> <br /> Fast-forward to today, and I&apos;ve
                had the privilege of working on a wide range of projects in
                various settings, from start-ups to established corporations.
                I&apos;ve collaborated with talented teams to develop responsive,
                user-friendly applications that meet diverse client needs. My
                main focus now is building scalable, high-performance web aplications using cutting-edge technologies.
                <br /> <br />
                Here are a few technologies I’ve been working with recently:

                <div className="grid md:grid-cols-3 grid-cols-2 mt-5">
                  {skills?.map((name, index) => <div key={index} className="flex items-center gap-2">
                    <Icon
                      icon="mdi:arrow-compass"
                      className="pt-1.5 transorm rotate-90 text-[15px] text-primary "
                    />
                    {name}
                  </div>)}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
