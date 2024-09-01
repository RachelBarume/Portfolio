"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TabData = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className= "list-disc pl-2">
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>HTML/CSS</li>
                <li>LabView</li>
                <li>Node.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className= "list-disc pl-2">
                <li>Doherty Memorial High School</li>
                <li>Northeastern University</li>
                <li>ACT, Thessaloniki, Greece</li>
            </ul>
        )
    },
    {
        title: "Relevant Courses",
        id: "relevant courses",
        content: (
            <ul className= "list-disc pl-2">
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
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="sticky top-8 mt-10"> {/* Adjust this margin-top (mt-8) value */}
                    <Image src="/images/ai-image2.png" width={600} height={600} />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col">
                    <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
                    <p className="text-base lg:text-lg mb-8">
                        I am a full-time Computer Engineering student pursuing a path in software engineering.
                        I have 6 months of full-time work experience, and I am seeking another full-time opportunity
                        to contribute to a team and enhance my skills.
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
