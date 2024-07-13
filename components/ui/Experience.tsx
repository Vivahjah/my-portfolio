import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import { useState, useEffect } from "react";
import { motion, Variants } from 'framer-motion'
import { Icon } from "@iconify/react";

const Experience = () => {
  const workHistory = [
    {
      id: 1,
      name: "Ethnos Cyber Limited",
      role: "Frontend Developer",
      fromDate: "Feb 2022",
      toDate: "Present",
      isFullTime: true,
      details: [
        "Build a mobile security platorm called aquila where developers can upload their apk or ipa files and scan for vulnerabilities in their application.",
        "Spear Headed is the design of Aquila Mobile security platorm using figma.",
        "Developed a Chat system using technologies like socket.io where users can chat with the custmer representative and lay their complaint.",
        "Developed chat support functionality using socket.io"
      ],
    },
    {
      id: 2,
      name: "Castillon Tech",
      role: "Graphics | UI | UX",
      fromDate: "Jan 2021",
      toDate: "Aug 22",
      isFullTime: true,
      details: [
        "Create wireframes and prototypes to visualize the basic layout and functionality of pages or screens in the product.",
        "Developing branding materials like logos, color palettes, and general visual identity guidelines. This aspect ensures that the product communicates the desired message and values of the brand effectively with Photoshop and Illustrator.",
        "Create content for different Client and managing their Social Media Handle.",
      ],
    },
    {
      id: 3,
      name: "IDizyn Solution",
      role: "Web Design - ( wordPress )",
      fromDate: "April 2018 ",
      toDate: "july 2019",
      isFullTime: false,
      details: [
        "Develop Astoning web pages using wordpress for different Clients",
        "Assist in creating digital artwork (graphics designs) used in developing most of the websites",
        "Implementing responsive design and ensuring cross-browser compatibility."
      ],
    },
    {
      id: 4,
      name: "SpendidComm Tech",
      role: "Web Design Intern",
      fromDate: "Jan 2018",
      toDate: "June 2018",
      isFullTime: true,
      details: [
        "Developed and maintained responsive web applications using HTML CSS and javascript",
        "Participating in code reviews and providing constructive feedback to other developers.",
        
      ],
    },
   
  ];

  const expVariants: Variants = {
    offscreen: {
      y: 30,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: .3
      }
    }
  };

  const [selectedWork, setSelectedWork] = useState(workHistory[0]);
  const [isLoadingWork, setisLoadingWork] = useState(false);

  useEffect(() => {
    setisLoadingWork(true);
    setTimeout(() => {
      setisLoadingWork(false);
    }, 100);
  }, [selectedWork]);



  return (
    <motion.section
      id="experience"
      className="md:py-32 py-24 max-w-4xl w-full mx-auto"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={expVariants}
    >
      <Container>
        <div>
          <Heading headingNumber={2} headingText="Where I’ve Worked" />
          <div className="flex md:flex-row flex-col items-start mt-10 mb-5">
            <div className="overflow-x-scroll md:w-auto w-full flex-shrink-0">
              <div className="md:block flex flex-shrink-0 relative md:border-l-[3px] border-Slate/20">
                <div
                  style={{ top: `${43 * (selectedWork.id - 1)}px` }}
                  className="md:block hidden absolute left-0 h-[43px] w-[3px] bg-primary transition-all duration-300 linear transform -translate-x-[3px] rounded-md "
                ></div>
                {/* For mobile screen */}
                <div
                  style={{ left: `${176 * (selectedWork.id - 1)}px` }}
                  className="md:hidden block absolute bottom-0 w-44 h-[2px] bg-primary transition-all duration-300 linear transform md:-translate-x-[3px] rounded-md"
                ></div>

                {workHistory.map((work, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedWork(work)}
                    className={`${
                      work.id === selectedWork.id ? " text-primary" : "text-Slate"
                    } hover:bg-LightNavy hover:text-primary cursor-pointer flex-shrink-0 h-[43px] md:w-auto w-44 md:border-b-0 border-b-[3px] border-Slate/20 md:text-sm text-xs flex items-center transition-all duration-150 ease-linear pl-5 pr-6 select-none md:justify-start justify-center `}
                  >
                    {work.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="transition-all duration-300 ease-linear w-full md:pt-1 pt-5 pb-2 md:pr-5 md:pl-10 min-h-[350px]">
              {!isLoadingWork && (
                <>
                  <h1 className="font-medium text-lg text-LightestSlate">
                    {selectedWork.role}{" "}
                    <span className="text-primary">@{selectedWork.name}</span>
                  </h1>
                  <p className="mt-0.5 mb-5 text-[13px] text-Slate capitalize">
                    {selectedWork.fromDate} <span className="mx-2">-</span>{" "}
                    {selectedWork.toDate} {!selectedWork.isFullTime && <>
                      <span className="mx-3">•</span>
                      <span className="normal-case ">Part-time</span>
                    </>
                    }
                  </p>
                  <div className="flex flex-col gap-3">
                    {selectedWork.details.map((detail, index) => (
                      <div
                        key={index}
                        className="text-sm text-Slate flex items-start gap-3"
                      >
                        <span>
                          <Icon
                            icon="mdi:arrow-compass"
                            className="pt-1.5 transorm rotate-90 text-[17px] text-primary "
                          />
                        </span>{" "}
                        {detail}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Experience;
