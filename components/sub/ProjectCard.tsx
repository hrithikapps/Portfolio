"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  demoLink: string;
  codeLink: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  demoLink,
  codeLink,
}: Props) => {
  const openPageInNewTab = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="p-4 mb-5 flex justify-center items-center">
        <button
          onClick={() => openPageInNewTab(demoLink)}
          className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Demo
        </button>
        <button
          onClick={() => openPageInNewTab(codeLink)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
