'use client'
import React, { useState } from 'react';

const faqs = [
  {
    question: "What kind of projects do you work on?",
    answer: "I work on web development projects using React and Node.js, focusing on advanced UI and responsive design.",
  },
  {
    question: "Are you available for freelance work?",
    answer: "Yes, I’m currently open to select freelance projects that align with my interests and expertise.",
  },
  {
    question: "How long does it take to finish a project?",
    answer: "It depends on the scope and complexity, but smaller projects usually take one to two weeks.",
  },
  {
    question: "Do you offer UI/UX design services?",
    answer: "Yes, I can design and build user interfaces using tools like Figma and Tailwind CSS.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer: "I specialize in JavaScript, React, Node.js, MongoDB, and Tailwind CSS.",
  },
  {
    question: "Do you work with teams or solo?",
    answer: "I have experience working both independently and in collaborative teams using Git and Agile methods.",
  },
  {
    question: "Can I contact you for a custom project idea?",
    answer: "Absolutely! I'm always open to hearing new ideas. Feel free to reach out through the contact section.",
  },
  {
    question: "Do you provide ongoing support after project delivery?",
    answer: "Yes, I offer support and maintenance based on agreement after the project is completed.",
  },
  {
    question: "What is your preferred tech stack?",
    answer: "React for frontend, Node.js/Express for backend, and MongoDB for the database.",
  },
  {
    question: "Do you build mobile apps?",
    answer: "I mainly focus on web apps, but I can build mobile apps using React Native.",
  },
  {
    question: "Do you use version control systems?",
    answer: "Yes, I use Git and GitHub for all projects to ensure proper version control.",
  },
  {
    question: "Can you work with APIs?",
    answer: "Yes, I can integrate RESTful and GraphQL APIs as needed.",
  },
  {
    question: "Do you offer website performance optimization?",
    answer: "Yes, I can optimize performance, improve loading speed, and enhance SEO.",
  },
  {
    question: "Can you fix bugs on an existing website?",
    answer: "Definitely! I can review, debug, and fix issues in existing codebases.",
  },
  {
    question: "Do you provide project documentation?",
    answer: "Yes, I include documentation and clean code with comments when needed.",
  },
  {
    question: "What tools do you use for UI design?",
    answer: "I mainly use Figma, but I'm also familiar with Adobe XD and Sketch.",
  },
  {
    question: "How do you communicate with clients?",
    answer: "Via email, Zoom, or platforms like Upwork, depending on the client’s preference.",
  },
  {
    question: "Can you deliver urgent projects?",
    answer: "Yes, if my schedule allows it, and the requirements are clear and feasible.",
  },
  {
    question: "Do you create websites with CMS like WordPress?",
    answer: "I specialize in custom development, but I have experience with WordPress as well.",
  },
  {
    question: "How can I get a quote for a project?",
    answer: "You can send me a message through the contact form with your project details.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-6  pt-[70px] md:px-20  md:ml-[3px]">
      <h1 className="text-4xl font-bold mb-8 text-center mt-20">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium hover:bg-blue-500 transition"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 mt-2 text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
