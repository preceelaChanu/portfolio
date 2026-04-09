// components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
