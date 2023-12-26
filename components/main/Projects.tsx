"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/futalert.png"
          title="Fut Alert Portfolio"
          description="I build dashboard for Fut Alert websit.This website is best tool for FIFA team trades. Traders can manage their purchased teams and check profit/loss in this dashbard."
        />
        <ProjectCard
          src="/Cityfleet.png"
          title="City Fleet"
          description="This is one of largest london travel company which deals with range of travel business including black cab and london buss operatons. I worked to improve this websit for company identiy."
        />
        <ProjectCard
          src="/BGDashboard.png"
          title="British Gas"
          description="Worked in British Gas on many teams including slaes and billing/pay. During this time worked on many projects for the improvement of customers experience."
        />
      </div>
      <a
        href="https://github.com/qasirdev?tab=repositories" 
        target="_blank"
        className="p-2 mt-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
      >
        More Project repos!
      </a>
    </div>
  );
};

export default Projects;
