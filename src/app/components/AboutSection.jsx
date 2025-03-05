"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TabData = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="grid md:grid-cols-2 gap-8">
                <ul className="list-disc pl-4">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>C#/C++</li>
                    <li>HTML/CSS</li>
                    <li>LabView</li>
                    <li>MATLAB</li>
                </ul>
                <ul className="list-disc pl-1">
                    <li>Git</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Linux</li>
                    <li>SQL</li>
                    <li>GitHub</li>
                </ul>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Computer Engineering, B.S. | Northeastern University</li>
                <li>American College of Thessaloniki | Thessaloniki, Greece</li>
                <li>Doherty Memorial High School</li>
            </ul>
        )
    },
    {
        title: "Relevant Courses",
        id: "relevant courses",
        content: (
            <ul className="list-disc pl-2">
                <li>Computing Fundamentals for Engineers</li>
                <li>Embedded Design: Enabling Robotics</li>
                <li>Fundamentals of Networks</li>
                <li>Circuits and Signals</li>
                <li>Physics II</li>
                <li>Professional Issues in Engineering</li>
            </ul>
        )
    }
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
        <section id="about-me" className="text-white py-20 md:py-50">
            <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="top-8 mt-10">
                    <Image src="/images/ai-image2.png" width={1500} height={1500} />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col">
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-500">
                            About Me
                        </span>
                    </h2>
                    <p className="text-base lg:text-lg mb-8">
                    I'm a third-year Computer Engineering student passionate about building innovative software solutions. Beyond coding, you’ll find me diving 
                    into a new book or exploring new places whenever I get the chance. As a first-generation student, I thrive on challenges—balancing a full course load, 
                    working, contributing to research, and staying involved in campus life, all while making time for my big (and very lively) family. I love staying busy, 
                    constantly learning, and pushing myself to grow in every aspect of life. Whether it’s tackling a tough coding problem or planning my next adventure, 
                    I’m always ready for what’s next.
                    </p>
                    <div className="flex flex-row mb-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("relevant courses")}
                            active={tab === "relevant courses"}
                        >
                            Relevant Courses
                        </TabButton>
                    </div>
                    <div>{TabData.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;