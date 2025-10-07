import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id: 1,
        title: "AI Physical Therapy Tool",
        language: "Python, SQLite, BlazePose, React",
        description: "Building an AI-powered physical therapy tool that provides users with real-time feedback from our BlazePose estimation model, enabling them to receive physical therapy at the comfort of their home for free. Leading backend development and data management, architecting a SQLite database to store pose estimation angles and user information, ensuring efficient data retrieval and analysis for personalized therapy sessions.",
        image: "images/projects/pj-image5.png",
    },
    {
        id: 2,
        title: "My Portfolio Website",
        language: "JavaScript, HTML, CSS",
        description: "This portfolio website was developed to provide a comprehensive platform for showcasing projects and experiences, demonstrating technical skills, and advancing front-end development expertise. It serves as a valuable tool for presenting a diverse range of work while reflecting a commitment to professional growth and a deeper engagement with web development.",
        image: "images/projects/pj-image1.png",
    },
    {
        id: 3,
        title: "AI-Powered Book Recommender",
        language: "Python, JavaScript, HTML, CSS",
        description: "The AI-powered book recommender provides personalized reading recommendations based on individual user preferences. Utilizing an extensive book database, the platform delivers tailored suggestions to assist users in discovering new titles.",
        image: "images/projects/pj-image6.jpg",
    },
    {
        id: 4,
        title: "Screen Capture",
        language: "LabView",
        description: "Developed a test system software utilizing LabView to enhance the reliability and performance of transducers utilized by the U.S. Military. The system efficiently captures screenshots from the Epoch 650 ultrasonic flaw detection gauge and automatically populates the requisite templates, enabling test technicians to effortlessly print and sign the completed documentation.",
        image: "images/projects/pj-image2.jpg",
    },
    {
        id: 5,
        title: "Race-to-the-End",
        language: "Python",
        description: "Created an interactive car racing game using Python and Pygame, which allows users to compete against a computer-controlled opponent. The game received favorable feedback from over 50 players for its smooth gameplay and innovative interactive design, resulting in a 40% increase in user retention.",
        image: "images/projects/pj-image3.jpg",
    },
    {
        id: 6,
        title: "Build-a-Balloon",
        language: "C++, SolidWorks, Arduino",
        description: "Designed and developed a UFO-inspired contraption featured at the Boston Children's Museum, captivating and entertaining children aged 5-10. Engineered 3D models using SolidWorks and programmed servomotor rotations with Arduino and C++, achieving precise motor control. ",
        image: "images/projects/pj-image4.png",
    },
]

const ProjectSection = () => {
  return (
    <section id="projects" className="py-12 md:py-12">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-500">
          My Projects
        </span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project) => 
          (<ProjectCard 
            key={project.id} 
            title={project.title} 
            language={project.language} 
            description={project.description}
            imgUrl={project.image}
          />
        ))} 
      </div>
    </section>
  )
}

export default ProjectSection
