"use client";
import React from "react";
import RecomendationsCard from "../sub/RecomendationsCard";
import { motion } from "framer-motion";
import {
  slideInFromLeft
} from "@/utils/motion";
const Recomendations = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="recomendations"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Recomendations
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 pb-10">
        <RecomendationsCard
          src="/Cenk.jpeg"
          title="Cenk Butunley"
          job="CEO at FUT Alert"
          description="Qasir is a very capable Front End / Full Stack developer that I had pleasure working with in a couple of different projects. 

          His attention to detail, software development knowledge, business awareness, eagerness for using the best practices and delivering top quality solutions in a timely manner are among his professional attributes that makes him one of the best developers that I had the chance to work with in the past. Strongly recommended."
        />
        <RecomendationsCard
          src="/Ignacio.jpeg"
          title="Ignacio Albella Perez"
          job="Mulesoft Developer"
          description="Qasir is a technically awesome frontend developer. He is purely an expert in front-end development and a good team player. He is a great asset to any frontend team. His knowledge and understanding of technologies, especially his commitment to emerging technologies, will always impress me. Hope I will get to work with him in the near future."
        />
        <RecomendationsCard
          src="/Sumit.jpeg"
          title="Sumit Kumar"
          job="Full Stack Developer"
          description="There is no better colleague than Qasir. He is one of the most dedicated professionals I’ve worked with and is willing to put in extra help whenever you need it. His expertise as a developer in different javascript frameworks and libraries is considerable, and it helped our team develop more efficient solutions for different projects. His contribution is valuable to the side, and I highly recommend Qasir."
        />
      </div>
      <a
        href="https://www.linkedin.com/in/qasir/details/recommendations/?detailScreenTabIndex=0" 
        target="_blank"
        className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
      >
        More Recomendations!
      </a>
    </div>
  );
};

export default Recomendations;
