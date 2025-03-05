"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TabData = [
    {
        title: "Engineering Experience",
        id: "technical experience",
        content: (
        <><div>
                <div className="mb-4">
                    <h3 className="text-2xl font-semibold mb-2">Amazon</h3>
                    <h3 className=" text-gray-400 text-medium font-normal mb-2 font-style: italic">January-June 2025 Expected </h3>
                    <p className="text-base">As a Software Development Engineer Co-op at Amazon Robotics, I am developing a React-based front-end UI for new delivery vans, improving navigation and package
                    identification for Delivery Associates by integrating visual identifiers and Figma mockups. Additionally, I collaborate with a cross-functional team to advance an AR/VR environment using
                    C# and Unity, creating interactive 3D simulations that replicate real-world workspaces for system design and training. My contributions also include working closely with engineers to 
                    deliver project milestones and executive-level demos for Amazon leadership.
</p>
                </div>
                {/* Add more technical experiences here */}
            </div><div>
                    <div className="mb-4">
                        <h3 className="text-2xl font-semibold mb-2">Evident Scientific</h3>
                        <h3 className=" text-gray-400 text-medium font-normal mb-2 font-style: italic">January-June 2024</h3>
                        <p className="text-base">During my six-month co-op at Evident Scientific in the spring of 2024, I had the chance to significantly enhance the reliability and
                            performance of transducers used by the U.S. Military. I designed a LabView-based test system that improved testing efficiency by 30% and reduced manual testing
                            time by 50%, while also streamlining the process for test technicians through automated screenshot capture and template population. This role allowed me to significantly
                            improve my coding skills and see my software interact with critical company devices like oscilloscopes and gauges. I also learned the importance of self-directed research
                            in addressing unique challenges and adapted to tight deadlines, delivering projects within weeks rather than months. Leading cross-departmental meetings to analyze failure
                            data, I achieved a 15% reduction in failure rates and collaborated on Engineer Change Notices (ECNs), resulting a significant reduction in pre-shipment product failures and
                            customer complaints.</p>
                    </div>
                    {/* Add more technical experiences here */}
                </div></>
        )
    },
    {
        title: "Undergrad Research Experience",
        id: "research experience",
        content: (
            <div>
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold mb-2">The Intersect of Neuroscience, Engineering, and Autism Research</h3>
                    <h3 className="text-gray-400 text-medium font-normal mb-2 font-style: italic">September 2024-Present</h3>
                    <p className="text-base">The research lab at Northeastern University focuses on enhancing communication accessibility for individuals with autism by leveraging machine learning and
                    multimodal data analysis. Through contributions to ROSCO (Rapid Online Sample of Communication), the lab develops AI-driven frameworks that analyze video and audio recordings to decode
                    communication patterns. A key focus is exploring how movements and gestures can be transformed into an interpretable language, fostering more inclusive communication pathways between 
                    minimally and non-speaking individuals with autism and their loved ones.</p>
                </div>
            </div>
        )
    },
    {
        title: "Work Experience",
        id: "work experience",
        content: (
            <div>
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold mb-2">Northeastern Resident Assistant</h3>
                    <h3 className="text-gray-400 text-medium font-normal mb-2 font-style: italic">August 2023-Present</h3>
                    <p className="text-base">As a Resident Assistant, I oversee a community of more than 80 residents, 
                    organize five engaging events each semester, and collaborate with a team of 30 RAs to create an inclusive 
                    and supportive environment. My role involves addressing resident concerns and facilitating problem resolution,
                     which has strengthened my leadership, organizational, and problem-solving abilities. These skills are highly 
                     transferable to technical roles, where effective project management, team collaboration, and troubleshooting are essential.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold mb-2">Waitress</h3>
                    <h3 className="text-gray-400 text-medium font-normal mb-2 font-style: italic">August 2020-August 2022</h3>
                    <p className="text-base">As a Waitress, I developed strong customer service skills, 
                    managed multiple tables efficiently, and resolved customer issues promptly. This experience 
                    honed my ability to handle high-pressure situations and multitask effectively, skills that are 
                    valuable in any technical role where problem-solving is key.</p>
                </div>
                {/* Add more work experiences here */}
            </div>
        )
    },
];

const Experience = () => {
    const [tab, setTab] = useState("technical experience");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="experience" className="text-white flex items-center justify-center min-h-screen py-20 md:py-12" style={{ marginTop: '0.001rem' }}>
            <div className="w-full max-w-4xl p-4 md:p-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-500">
                            My Experience
                        </span>
                    </h2>
                    <div className="flex justify-center mb-8">
                        <TabButton
                            selectTab={() => handleTabChange("technical experience")}
                            active={tab === "technical experience"}
                        >
                            Technical Experience
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("research experience")}
                            active={tab === "research experience"}
                        >
                            Undergrad Research Experience
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("work experience")}
                            active={tab === "work experience"}
                        >
                            Work Experience
                        </TabButton>
                    </div>
                    <div className="text-left">
                        {TabData.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;