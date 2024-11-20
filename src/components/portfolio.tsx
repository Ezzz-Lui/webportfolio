'use client'

import React from './icons/react';
import NodeJs from './icons/nodejs';
import MongoDb from './icons/mongodb';
import Express from './icons/express';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, FolderOpen, Award, Github, Linkedin, Mail, Twitter, Code, Server, Database, Globe, CheckCircle, X } from 'lucide-react';
import MicrosoftAzure from './icons/azure';
import Django from './icons/django';
import Python from './icons/python';
import TailwindCSS from './icons/tailwind';
import Astro from './icons/astro';
import JavaScript from './icons/javascript';
import Vercel from './icons/vercel';
import TypeScript from './icons/typescript';
import Nextjs from './icons/nextjs';
import PostgreSQL from './icons/postgresql';
import PowerBI from './icons/powerbi';
import Excel from './icons/excel';
import Platzi from './icons/platzi'
import Google from './icons/google'
import Udemy from './icons/udemy'
import Azure from './icons/azure2'

const projects = [
  { 
    title: 'Benefits Calculator - ISR', 
    description: 'The Benefits Calculator is a web application developed with Django that allows users to calculate salary benefits easily and quickly. The application is deployed on Azure and uses various technologies to provide an efficient and reliable user experience.',
    skills: [
      { name: 'Django', icon: <Django /> },
      { name: 'Python', icon: <Python /> },
      { name: 'Azure', icon: <Azure /> },
      { name: 'TailwindCSS', icon: <TailwindCSS /> }
    ]
  },
  { 
    title: 'Final Project - Probability and Statistics ITCA 2024', 
    description: 'Final Examination Project - Development of statistical and probabilistic thinking. Collection of games representing probability and statistics applied in percentages such as: Coin Toss, 21 Blackjack and Dice Toss',
    skills: [
      { name: 'Astro', icon: <Astro/> },
      { name: 'Javascript', icon: <JavaScript /> },
      { name: 'TailwindCSS', icon: <TailwindCSS /> },
      { name: 'Vercel', icon: <Vercel /> }
    ]
  },
  { 
    title: 'QueryWise AI', 
    description: 'It converts natural language into SQL queries, tracking real-time token usage and associated costs. This proof-of-concept offers transparency and control over resource consumption using AI. ',
    skills: [
      { name: 'NextJS', icon: <Nextjs/> },
      { name: 'Typescript', icon: <TypeScript /> },
      { name: 'Python', icon: <Python/> },
      { name: 'Azure AI', icon: <Azure /> }
    ]
  },
  { 
    title: 'RSM - Final Data Analyst Project', 
    description: 'Analyze your sales data and propose improvement strategies as a Junior Data Analyst using SQL, data visualization and machine learning models.',
    skills: [
      { name: 'PostgreSQL', icon: <PostgreSQL/> },
      { name: 'Power BI', icon: <PowerBI/> },
      { name: 'Python', icon: <Python /> },
      { name: 'Excel', icon: <Excel /> }
    ]
  },
]

const experiences = [
  {
    title: 'Intern - Lead Full Stack Developer',
    company: 'ITCA - FEPADE',
    period: '2024 - Present',
    description: 'Development of fullstack applications for national institutions from databases, cloud computing, DevSecOps, DevOps and frontend-backend development.'
  },
  {
    title: 'Intern - Web Developer',
    company: 'Mabrick',
    period: 'March 2024',
    description: 'Development of scalable new official web applications using React and Node.js. Implemented CI/CD pipelines and deployed applications on Vercel'
  },
  {
    title: 'Developer Junior Trainee',
    company: 'Kata Software ES',
    period: '2023 - 2024',
    description: 'SQL Development, Reporting with Report Builder and SQL Server, SQL Database and Servers'
  },
  {
    title: 'Intern - SQL Developer Jr',
    company: 'CEL - Comision Ejecutiva Hidroelectrica del Rio Lempa',
    period: '2023',
    description: 'ORACLE database fundamentals, Data modeling in PL/SQL, Reporting and documentation of systems, SQL'
  }
]

const certifications = [
  {
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    issuer: 'Microsoft',
    date: 'October 2024',
    icon: <MicrosoftAzure />
  },
  {
    name: 'DevOps',
    issuer: 'Platzi',
    date: 'March 2024',
    icon: <Platzi />
  },
  {
    name: 'Cloud Digital Leader',
    issuer: 'Google Cloud x Platzi',
    date: 'March 2024',
    icon: <Google />
  },
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    date: 'January 2023',
    icon: <MicrosoftAzure />
  },
  {
    name: 'Master Python for Data Analyst',
    issuer: 'Udemy',
    date: 'December 2024',
    icon: <Udemy />
  }
]

export function Portfolio() {
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // O un spinner de carga, etc.
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen text-gray-100 relative overflow-hidden bg-black">
    {/* Fondo moderno */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

      {/* Header */}
      <header className="bg-opacity-50 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Portfolio Web</div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-gray-300 transition duration-300">Home</a></li>
                <li><a href="#projects" className="hover:text-gray-300 transition duration-300">Projects</a></li>
                <li><a href="#experience" className="hover:text-gray-300 transition duration-300">Experience</a></li>
                <li><a href="#certifications" className="hover:text-gray-300 transition duration-300">Certifications</a></li>
              </ul>
            </nav>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <menu />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                <li><a href="#home" className="block hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Home</a></li>
                <li><a href="#projects" className="block hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Projects</a></li>
                <li><a href="#experience" className="block hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Experience</a></li>
                <li><a href="#certifications" className="block hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Certifications</a></li>
              </ul>
            </nav>
          </div>
        )}
      </header>


      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hero Section */}
          <motion.div
            id="home"
            className="col-span-full rounded-3xl p-8 shadow-lg backdrop-blur-sm bg-opacity-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-4 text-gray-100">Luis Ramos</h1>
              <p className="text-xl mb-4 text-gray-300">Backend Developer | Azure AI Engineer Associate | Data Analyst Jr</p>
              <p className="mb-6 max-w-2xl text-gray-400">
              Technician with a background in Intelligent Computer Engineering, specialized in backend development, cloud services and a solid DevOps ecosystem. Experience in technologies such as NestJS, Azure and CI/CD, as well as database management such as PostgreSQL and SQL Server. Currently, with focus on cloud architecture, deployments with services and artificial intelligence solutions using Azure.
              </p>
              <motion.button
                className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white px-6 py-2 rounded-full font-semibold hover:from-zinc-800 hover:to-zinc-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div id="projects" className="col-span-full bg-zinc-900 rounded-3xl p-6 shadow-lg backdrop-blur-sm bg-opacity-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-800 rounded-lg p-4 cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="font-semibold mb-2 text-gray-100">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="font-bold text-xs bg-zinc-700 text-gray-200 px-3 py-2 rounded-full flex items-center">
                        {skill.icon}
                        <span className="ml-1">{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Experience Section */}
          <div id="experience" className="col-span-full md:col-span-2 bg-zinc-900 rounded-3xl p-6 shadow-lg backdrop-blur-sm bg-opacity-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Professional Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-800 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-semibold text-lg text-gray-100">{exp.title}</h3>
                  <p className="font-semibold text-sm text-gray-300">{exp.company} | {exp.period}</p>
                  <p className="mt-2 text-sm text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Certifications Section */}
          <div id="certifications" className="col-span-full md:col-span-1 bg-zinc-900 rounded-3xl p-6 shadow-lg backdrop-blur-sm bg-opacity-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Professional Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-800 rounded-lg p-4 flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mr-4 mt-1">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-100">{cert.name}</h3>
                    <p className="text-sm text-gray-300">{cert.issuer}</p>
                    <p className="text-xs text-gray-400">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Links */}
          <div className="col-span-full bg-zinc-900 rounded-3xl p-6 shadow-lg backdrop-blur-sm bg-opacity-50 mt-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">Contact</h2>
            <div className="flex justify-center space-x-8">
              <motion.a href="https://github.com/Ezzz-Lui" whileHover={{ y: -3 }} className="text-gray-300 hover:text-gray-400 flex flex-col items-center">
                <Github size={32} />
                <span className="mt-2">GitHub</span>
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/lk-ramos/" whileHover={{ y: -3 }} className="text-gray-300 hover:text-gray-400 flex flex-col items-center">
                <Linkedin size={32} />
                <span className="mt-2">LinkedIn</span>
              </motion.a>
              <motion.a href="mailto:ogn.lui@gmail.com" whileHover={{ y: -3 }} className="text-gray-300 hover:text-gray-400 flex flex-col items-center">
                <Mail size={32} />
                <span className="mt-2">Email</span>
              </motion.a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}