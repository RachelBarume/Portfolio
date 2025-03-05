"use client";
import React from "react";

const ContactMe = () => {
    return (
        <section id="contact-me" className="text-gray-300 py-8 flex flex-col items-center mt-20">
            <h2 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
                    Let's Connect
                </span>
            </h2>
            <ul className="text-lg">
                <li className="mb-2">
                    <a href="mailto:barume.r@northeastern.edu" className="text-gray-400 hover:underline">
                        Email: barume.r@northeastern.edu
                    </a>
                </li>
                <li className="mb-2">
                    <a href="tel:+1234567890" className="text-gray-400 hover:underline">
                        Phone: 980-465-3502
                    </a>
                </li>
                <li className="mb-2">
                    <a href="https://www.linkedin.com/in/rachelbarume/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">
                        LinkedIn: linkedin.com/in/rachelbarume
                    </a>
                </li>
                <li className="mb-2">
                    <a href="https://github.com/RachelBarume" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">
                        GitHub: github.com/rachelbarume
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default ContactMe;