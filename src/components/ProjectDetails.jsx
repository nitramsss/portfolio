const ProjectDetails = ({ project }) => {
  if (!project) return null;

  return (
    <div className="space-y-4">
      <div className=""><img src={project.img} className="overflow-hidden object-cover"/></div>
      <p className="text-white/70">{project.description}</p>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 text-sm bg-white/10 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectDetails