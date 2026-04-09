import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const Page = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'This is a description for project one.',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'This is a description for project two.',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'This is a description for project three.',
      link: '#',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
