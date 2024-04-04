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
          src="/FigmaClone.png"
          title="Swiggy Clone"
          description="Swiggy inspired Food Ordering App using ReactJS , Tailwind CSS, Redux ToolKit, with Shimmer UI "
          codeLink="https://github.com/hrithikapps/https---github.com-hrithikapps-SmartBites-Food-App"
          demoLink="https://https-github-com-hrithikapps-smart-bites-food-app.vercel.app/"
        />
        <ProjectCard
          src="/TravelWebsite.png"
          title="Netflix GPT"
          description="Netflix inspired Movie App with GPT movie suggestions, Tailwind CSS, TypeScript, TMDB API and Open AI API"
          codeLink=""
          demoLink=""
        />
        <ProjectCard
          src="/YoutubeClone.png"
          title="Youtube Clone"
          description="Youtube Clone Using React, Tailwind CSS, JavaScript, Redux ToolKit for cetral State Management and Youtube API"
          codeLink=""
          demoLink=""
        />
      </div>
    </div>
  );
};

export default Projects;
