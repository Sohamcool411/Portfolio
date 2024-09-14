"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>React</li>
        <li>Redux</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bharati Vidyapeeth College of Engineering, Pune
          <ul className="list-none pl-2">
            <li className="text-sm">- Graduated with a score of 9.40/10 GPA</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>NPTEL : <a  className='underline' href="https://drive.google.com/file/d/154ICbp5tdbZNzCF4oa-BW2hYz2Eg5MaT/view">Advanced Python Programming</a></li>
        <li>Walchand College of Engineering : <a href="https://drive.google.com/file/d/1jkAvS1xow6Cvb3hnpdBCT8Fqx4gf7-Jy/view" className="underline">Data Structures And Algorithms</a></li>
        <li>HackerRank : <a href="https://www.hackerrank.com/certificates/1f29e9e5ab1c" className="underline">SQL(Advanced)</a></li>
        <li>Udemy : <a href="https://ude.my/UC-77accb7f-0d68-4eb7-991f-b1130c703f31/" className="underline">Web Developement</a></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a software developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MySQL,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;